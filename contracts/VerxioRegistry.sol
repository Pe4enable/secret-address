// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract VerxioPay is Ownable, ReentrancyGuard {
    
    using SafeERC20 for IERC20;
    struct senderPublicKey {
        bytes32 x;
        bytes32 y;
        bytes1 ss;
        address token;
    }

    address constant xDAI = address(0x0);

    uint8 public constant VERSION = 1;

    senderPublicKey[] public keys;

    constructor() Ownable() {}

    function addSenderKey(bytes32 x, bytes32 y, bytes1 ss, address token) external onlyOwner {
        require(token != address(0), "Token contract address cannot be Zero");
        keys.push(senderPublicKey(x, y, ss, token));
    }

    function send(bytes32 x, bytes32 y, bytes1 ss, address token) private {
    keys.push(senderPublicKey(x, y, ss, token));
    }

    function totalKeys() external view returns (uint256 count) {
        return keys.length;
    }

    function sendTokenAnonymously(bytes32 x, bytes32 y, bytes1 ss, address token, address target, uint256 amount)
        external
        nonReentrant
    {
        require(amount > 0, "Sending amount should be greater than 0");
        require(token != address(0x0), "Token contract address cannot be Zero");
        require(target != address(0x0), "Receiver address cannot be Zero");

        send(x, y, ss, token);

        IERC20(token).safeTransferFrom(msg.sender, target, amount);
    }

    function sendAnonymously(bytes32 x, bytes32 y, bytes1 ss, address payable target)
        public
        payable
        nonReentrant
    {
        require(msg.value > 0, "Sending amount should be more than 0");
        require(target != address(0x0), "Receiver address required");

        send(x, y, ss, xDAI);

        (bool sent, ) = target.call{value: msg.value}("");
        require(sent, "Failed to send xDAI");
    }

    function getNextKeys(uint256 start) external view returns (senderPublicKey[10] memory) {
        senderPublicKey[10] memory gotKeys;

        uint256 end = start + 10;
        uint256 limit = (keys.length < end) ? keys.length : end;

        for (uint256 i = start; i < limit; i++) {
            gotKeys[i - start] = keys[i];
        }

        return gotKeys;
    }
}
