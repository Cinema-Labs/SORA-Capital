// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Create2.sol";

library ERC6551AccountLib {
    function computeAddress(
        address registry,
        address implementation,
        uint256 chainId,
        address tokenContract,
        uint256 tokenId,
        uint256 _salt
    ) internal pure returns (address) {
        bytes32 bytecodeHash = keccak256(
            _creationCode(
                implementation,
                chainId,
                tokenContract,
                tokenId,
                _salt
            )
        );

        return Create2.computeAddress(bytes32(_salt), bytecodeHash, registry);
    }

    function _creationCode(
            address implementation_,
            uint256 chainId_,
            address tokenContract_,
            uint256 tokenId_,
            uint256 salt_
        ) internal pure returns (bytes memory) {
            return
                abi.encodePacked(
                    hex"3d60ad80600a3d3981f3363d3d373d3d3d363d73",
                    implementation_,
                    hex"5af43d82803e903d91602b57fd5bf3",
                    abi.encode(salt_, chainId_, tokenContract_, tokenId_)
                );
        }

    function token()
        internal
        view
        returns (
            uint256,
            address,
            uint256
        )
    {
        bytes memory footer = new bytes(0x60);

        assembly {
            // copy 0x60 bytes from end of footer
            extcodecopy(address(), add(footer, 0x20), 0x4d, 0xad)
        }

        return abi.decode(footer, (uint256, address, uint256));
    }

    function salt() internal view returns (uint256) {
        bytes memory footer = new bytes(0x20);

        assembly {
            // copy 0x20 bytes from beginning of footer
            extcodecopy(address(), add(footer, 0x20), 0x2d, 0x4d)
        }

        return abi.decode(footer, (uint256));
    }
}