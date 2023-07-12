Steps to repro

1. Initialize a fresh repo
2. Change the tsconfig to emit declarations (.d.ts) files
3. npm install and build typescript - Should work fine
4. rm lockfile and now install with pnpm instead
5. build typescript - will fail 

```
src/generated.ts:310:17 - error TS2742: The inferred type of 'useErc20Read' cannot be named without a reference to '.pnpm/@tanstack+query-core@4.29.19/node_modules/@tanstack/query-core'. This is likely not portable. A type annotation is necessary.

310 export function useErc20Read<
                    ~~~~~~~~~~~~

src/generated.ts:329:17 - error TS2742: The inferred type of 'useErc20Allowance' cannot be named without a reference to '.pnpm/@tanstack+query-core@4.29.19/node_modules/@tanstack/query-core'. This is likely not portable. A type annotation is necessary.

329 export function useErc20Allowance<
                    ~~~~~~~~~~~~~~~~~

src/generated.ts:348:17 - error TS2742: The inferred type of 'useErc20BalanceOf' cannot be named without a reference to '.pnpm/@tanstack+query-core@4.29.19/node_modules/@tanstack/query-core'. This is likely not portable. A type annotation is necessary.

348 export function useErc20BalanceOf<
                    ~~~~~~~~~~~~~~~~~

src/generated.ts:367:17 - error TS2742: The inferred type of 'useErc20Decimals' cannot be named without a reference to '.pnpm/@tanstack+query-core@4.29.19/node_modules/@tanstack/query-core'. This is likely not portable. A type annotation is necessary.

367 export function useErc20Decimals<
                    ~~~~~~~~~~~~~~~~

src/generated.ts:386:17 - error TS2742: The inferred type of 'useErc20Name' cannot be named without a reference to '.pnpm/@tanstack+query-core@4.29.19/node_modules/@tanstack/query-core'. This is likely not portable. A type annotation is necessary.

386 export function useErc20Name<
                    ~~~~~~~~~~~~

src/generated.ts:405:17 - error TS2742: The inferred type of 'useErc20Symbol' cannot be named without a reference to '.pnpm/@tanstack+query-core@4.29.19/node_modules/@tanstack/query-core'. This is likely not portable. A type annotation is necessary.

405 export function useErc20Symbol<
                    ~~~~~~~~~~~~~~

src/generated.ts:424:17 - error TS2742: The inferred type of 'useErc20TotalSupply' cannot be named without a reference to '.pnpm/@tanstack+query-core@4.29.19/node_modules/@tanstack/query-core'. This is likely not portable. A type annotation is necessary.

424 export function useErc20TotalSupply<
                    ~~~~~~~~~~~~~~~~~~~

src/generated.ts:443:17 - error TS2742: The inferred type of 'useErc20Write' cannot be named without a reference to '.pnpm/@wagmi+core@1.0.6_react@18.2.0_typescript@5.0.4_viem@0.3.36/node_modules/@wagmi/core'. This is likely not portable. A type annotation is necessary.

443 export function useErc20Write<
                    ~~~~~~~~~~~~~

src/generated.ts:443:17 - error TS2742: The inferred type of 'useErc20Write' cannot be named without a reference to '.pnpm/abitype@0.8.1_typescript@5.0.4/node_modules/abitype/dist/abi-3a9c20c7'. This is likely not portable. A type annotation is necessary.

443 export function useErc20Write<
                    ~~~~~~~~~~~~~

src/generated.ts:466:17 - error TS2742: The inferred type of 'useErc20Approve' cannot be named without a reference to '.pnpm/@wagmi+core@1.0.6_react@18.2.0_typescript@5.0.4_viem@0.3.36/node_modules/@wagmi/core'. This is likely not portable. A type annotation is necessary.

466 export function useErc20Approve<TMode extends WriteContractMode = undefined>(
                    ~~~~~~~~~~~~~~~

src/generated.ts:466:17 - error TS2742: The inferred type of 'useErc20Approve' cannot be named without a reference to '.pnpm/abitype@0.8.1_typescript@5.0.4/node_modules/abitype/dist/abi-3a9c20c7'. This is likely not portable. A type annotation is necessary.

466 export function useErc20Approve<TMode extends WriteContractMode = undefined>(
                    ~~~~~~~~~~~~~~~

src/generated.ts:491:17 - error TS2742: The inferred type of 'useErc20Transfer' cannot be named without a reference to '.pnpm/@wagmi+core@1.0.6_react@18.2.0_typescript@5.0.4_viem@0.3.36/node_modules/@wagmi/core'. This is likely not portable. A type annotation is necessary.

491 export function useErc20Transfer<TMode extends WriteContractMode = undefined>(
                    ~~~~~~~~~~~~~~~~

src/generated.ts:491:17 - error TS2742: The inferred type of 'useErc20Transfer' cannot be named without a reference to '.pnpm/abitype@0.8.1_typescript@5.0.4/node_modules/abitype/dist/abi-3a9c20c7'. This is likely not portable. A type annotation is necessary.

491 export function useErc20Transfer<TMode extends WriteContractMode = undefined>(
                    ~~~~~~~~~~~~~~~~

src/generated.ts:516:17 - error TS2742: The inferred type of 'useErc20TransferFrom' cannot be named without a reference to '.pnpm/@wagmi+core@1.0.6_react@18.2.0_typescript@5.0.4_viem@0.3.36/node_modules/@wagmi/core'. This is likely not portable. A type annotation is necessary.

516 export function useErc20TransferFrom<
                    ~~~~~~~~~~~~~~~~~~~~

src/generated.ts:516:17 - error TS2742: The inferred type of 'useErc20TransferFrom' cannot be named without a reference to '.pnpm/abitype@0.8.1_typescript@5.0.4/node_modules/abitype/dist/abi-3a9c20c7'. This is likely not portable. A type annotation is necessary.

516 export function useErc20TransferFrom<
                    ~~~~~~~~~~~~~~~~~~~~

src/generated.ts:543:17 - error TS2742: The inferred type of 'useErc20IncreaseAllowance' cannot be named without a reference to '.pnpm/@wagmi+core@1.0.6_react@18.2.0_typescript@5.0.4_viem@0.3.36/node_modules/@wagmi/core'. This is likely not portable. A type annotation is necessary.

543 export function useErc20IncreaseAllowance<
                    ~~~~~~~~~~~~~~~~~~~~~~~~~

src/generated.ts:543:17 - error TS2742: The inferred type of 'useErc20IncreaseAllowance' cannot be named without a reference to '.pnpm/abitype@0.8.1_typescript@5.0.4/node_modules/abitype/dist/abi-3a9c20c7'. This is likely not portable. A type annotation is necessary.

543 export function useErc20IncreaseAllowance<
                    ~~~~~~~~~~~~~~~~~~~~~~~~~

src/generated.ts:570:17 - error TS2742: The inferred type of 'useErc20DecreaseAllowance' cannot be named without a reference to '.pnpm/@wagmi+core@1.0.6_react@18.2.0_typescript@5.0.4_viem@0.3.36/node_modules/@wagmi/core'. This is likely not portable. A type annotation is necessary.

570 export function useErc20DecreaseAllowance<
                    ~~~~~~~~~~~~~~~~~~~~~~~~~

src/generated.ts:570:17 - error TS2742: The inferred type of 'useErc20DecreaseAllowance' cannot be named without a reference to '.pnpm/abitype@0.8.1_typescript@5.0.4/node_modules/abitype/dist/abi-3a9c20c7'. This is likely not portable. A type annotation is necessary.

570 export function useErc20DecreaseAllowance<
                    ~~~~~~~~~~~~~~~~~~~~~~~~~

src/generated.ts:597:17 - error TS2742: The inferred type of 'usePrepareErc20Write' cannot be named without a reference to '.pnpm/@tanstack+query-core@4.29.19/node_modules/@tanstack/query-core'. This is likely not portable. A type annotation is necessary.

597 export function usePrepareErc20Write<TFunctionName extends string>(
                    ~~~~~~~~~~~~~~~~~~~~

src/generated.ts:612:17 - error TS2742: The inferred type of 'usePrepareErc20Approve' cannot be named without a reference to '.pnpm/@tanstack+query-core@4.29.19/node_modules/@tanstack/query-core'. This is likely not portable. A type annotation is necessary.

612 export function usePrepareErc20Approve(
                    ~~~~~~~~~~~~~~~~~~~~~~

src/generated.ts:628:17 - error TS2742: The inferred type of 'usePrepareErc20Transfer' cannot be named without a reference to '.pnpm/@tanstack+query-core@4.29.19/node_modules/@tanstack/query-core'. This is likely not portable. A type annotation is necessary.

628 export function usePrepareErc20Transfer(
                    ~~~~~~~~~~~~~~~~~~~~~~~

src/generated.ts:644:17 - error TS2742: The inferred type of 'usePrepareErc20TransferFrom' cannot be named without a reference to '.pnpm/@tanstack+query-core@4.29.19/node_modules/@tanstack/query-core'. This is likely not portable. A type annotation is necessary.

644 export function usePrepareErc20TransferFrom(
                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~

src/generated.ts:660:17 - error TS2742: The inferred type of 'usePrepareErc20IncreaseAllowance' cannot be named without a reference to '.pnpm/@tanstack+query-core@4.29.19/node_modules/@tanstack/query-core'. This is likely not portable. A type annotation is necessary.

660 export function usePrepareErc20IncreaseAllowance(
                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

src/generated.ts:676:17 - error TS2742: The inferred type of 'usePrepareErc20DecreaseAllowance' cannot be named without a reference to '.pnpm/@tanstack+query-core@4.29.19/node_modules/@tanstack/query-core'. This is likely not portable. A type annotation is necessary.

676 export function usePrepareErc20DecreaseAllowance(
                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

src/generated.ts:739:17 - error TS2742: The inferred type of 'useErc721Read' cannot be named without a reference to '.pnpm/@tanstack+query-core@4.29.19/node_modules/@tanstack/query-core'. This is likely not portable. A type annotation is necessary.

739 export function useErc721Read<
                    ~~~~~~~~~~~~~

src/generated.ts:758:17 - error TS2742: The inferred type of 'useErc721BalanceOf' cannot be named without a reference to '.pnpm/@tanstack+query-core@4.29.19/node_modules/@tanstack/query-core'. This is likely not portable. A type annotation is necessary.

758 export function useErc721BalanceOf<
                    ~~~~~~~~~~~~~~~~~~

src/generated.ts:777:17 - error TS2742: The inferred type of 'useErc721GetApproved' cannot be named without a reference to '.pnpm/@tanstack+query-core@4.29.19/node_modules/@tanstack/query-core'. This is likely not portable. A type annotation is necessary.

777 export function useErc721GetApproved<
                    ~~~~~~~~~~~~~~~~~~~~

src/generated.ts:796:17 - error TS2742: The inferred type of 'useErc721IsApprovedForAll' cannot be named without a reference to '.pnpm/@tanstack+query-core@4.29.19/node_modules/@tanstack/query-core'. This is likely not portable. A type annotation is necessary.

796 export function useErc721IsApprovedForAll<
                    ~~~~~~~~~~~~~~~~~~~~~~~~~

src/generated.ts:815:17 - error TS2742: The inferred type of 'useErc721Name' cannot be named without a reference to '.pnpm/@tanstack+query-core@4.29.19/node_modules/@tanstack/query-core'. This is likely not portable. A type annotation is necessary.

815 export function useErc721Name<
                    ~~~~~~~~~~~~~

src/generated.ts:834:17 - error TS2742: The inferred type of 'useErc721OwnerOf' cannot be named without a reference to '.pnpm/@tanstack+query-core@4.29.19/node_modules/@tanstack/query-core'. This is likely not portable. A type annotation is necessary.

834 export function useErc721OwnerOf<
                    ~~~~~~~~~~~~~~~~

src/generated.ts:853:17 - error TS2742: The inferred type of 'useErc721Symbol' cannot be named without a reference to '.pnpm/@tanstack+query-core@4.29.19/node_modules/@tanstack/query-core'. This is likely not portable. A type annotation is necessary.

853 export function useErc721Symbol<
                    ~~~~~~~~~~~~~~~

src/generated.ts:872:17 - error TS2742: The inferred type of 'useErc721TokenByIndex' cannot be named without a reference to '.pnpm/@tanstack+query-core@4.29.19/node_modules/@tanstack/query-core'. This is likely not portable. A type annotation is necessary.

872 export function useErc721TokenByIndex<
                    ~~~~~~~~~~~~~~~~~~~~~

src/generated.ts:891:17 - error TS2742: The inferred type of 'useErc721TokenUri' cannot be named without a reference to '.pnpm/@tanstack+query-core@4.29.19/node_modules/@tanstack/query-core'. This is likely not portable. A type annotation is necessary.

891 export function useErc721TokenUri<
                    ~~~~~~~~~~~~~~~~~

src/generated.ts:910:17 - error TS2742: The inferred type of 'useErc721TotalSupply' cannot be named without a reference to '.pnpm/@tanstack+query-core@4.29.19/node_modules/@tanstack/query-core'. This is likely not portable. A type annotation is necessary.

910 export function useErc721TotalSupply<
                    ~~~~~~~~~~~~~~~~~~~~

src/generated.ts:929:17 - error TS2742: The inferred type of 'useErc721Write' cannot be named without a reference to '.pnpm/@wagmi+core@1.0.6_react@18.2.0_typescript@5.0.4_viem@0.3.36/node_modules/@wagmi/core'. This is likely not portable. A type annotation is necessary.

929 export function useErc721Write<
                    ~~~~~~~~~~~~~~

src/generated.ts:929:17 - error TS2742: The inferred type of 'useErc721Write' cannot be named without a reference to '.pnpm/abitype@0.8.1_typescript@5.0.4/node_modules/abitype/dist/abi-3a9c20c7'. This is likely not portable. A type annotation is necessary.

929 export function useErc721Write<
                    ~~~~~~~~~~~~~~

src/generated.ts:952:17 - error TS2742: The inferred type of 'useErc721Approve' cannot be named without a reference to '.pnpm/@wagmi+core@1.0.6_react@18.2.0_typescript@5.0.4_viem@0.3.36/node_modules/@wagmi/core'. This is likely not portable. A type annotation is necessary.

952 export function useErc721Approve<TMode extends WriteContractMode = undefined>(
                    ~~~~~~~~~~~~~~~~

src/generated.ts:952:17 - error TS2742: The inferred type of 'useErc721Approve' cannot be named without a reference to '.pnpm/abitype@0.8.1_typescript@5.0.4/node_modules/abitype/dist/abi-3a9c20c7'. This is likely not portable. A type annotation is necessary.

952 export function useErc721Approve<TMode extends WriteContractMode = undefined>(
                    ~~~~~~~~~~~~~~~~

src/generated.ts:977:17 - error TS2742: The inferred type of 'useErc721SafeTransferFrom' cannot be named without a reference to '.pnpm/@wagmi+core@1.0.6_react@18.2.0_typescript@5.0.4_viem@0.3.36/node_modules/@wagmi/core'. This is likely not portable. A type annotation is necessary.

977 export function useErc721SafeTransferFrom<
                    ~~~~~~~~~~~~~~~~~~~~~~~~~

src/generated.ts:977:17 - error TS2742: The inferred type of 'useErc721SafeTransferFrom' cannot be named without a reference to '.pnpm/abitype@0.8.1_typescript@5.0.4/node_modules/abitype/dist/abi-3a9c20c7'. This is likely not portable. A type annotation is necessary.

977 export function useErc721SafeTransferFrom<
                    ~~~~~~~~~~~~~~~~~~~~~~~~~

src/generated.ts:1004:17 - error TS2742: The inferred type of 'useErc721SetApprovalForAll' cannot be named without a reference to '.pnpm/@wagmi+core@1.0.6_react@18.2.0_typescript@5.0.4_viem@0.3.36/node_modules/@wagmi/core'. This is likely not portable. A type annotation is necessary.

1004 export function useErc721SetApprovalForAll<
                     ~~~~~~~~~~~~~~~~~~~~~~~~~~

src/generated.ts:1004:17 - error TS2742: The inferred type of 'useErc721SetApprovalForAll' cannot be named without a reference to '.pnpm/abitype@0.8.1_typescript@5.0.4/node_modules/abitype/dist/abi-3a9c20c7'. This is likely not portable. A type annotation is necessary.

1004 export function useErc721SetApprovalForAll<
                     ~~~~~~~~~~~~~~~~~~~~~~~~~~

src/generated.ts:1031:17 - error TS2742: The inferred type of 'useErc721TransferFrom' cannot be named without a reference to '.pnpm/@wagmi+core@1.0.6_react@18.2.0_typescript@5.0.4_viem@0.3.36/node_modules/@wagmi/core'. This is likely not portable. A type annotation is necessary.

1031 export function useErc721TransferFrom<
                     ~~~~~~~~~~~~~~~~~~~~~

src/generated.ts:1031:17 - error TS2742: The inferred type of 'useErc721TransferFrom' cannot be named without a reference to '.pnpm/abitype@0.8.1_typescript@5.0.4/node_modules/abitype/dist/abi-3a9c20c7'. This is likely not portable. A type annotation is necessary.

1031 export function useErc721TransferFrom<
                     ~~~~~~~~~~~~~~~~~~~~~

src/generated.ts:1058:17 - error TS2742: The inferred type of 'usePrepareErc721Write' cannot be named without a reference to '.pnpm/@tanstack+query-core@4.29.19/node_modules/@tanstack/query-core'. This is likely not portable. A type annotation is necessary.

1058 export function usePrepareErc721Write<TFunctionName extends string>(
                     ~~~~~~~~~~~~~~~~~~~~~

src/generated.ts:1073:17 - error TS2742: The inferred type of 'usePrepareErc721Approve' cannot be named without a reference to '.pnpm/@tanstack+query-core@4.29.19/node_modules/@tanstack/query-core'. This is likely not portable. A type annotation is necessary.

1073 export function usePrepareErc721Approve(
                     ~~~~~~~~~~~~~~~~~~~~~~~

src/generated.ts:1089:17 - error TS2742: The inferred type of 'usePrepareErc721SafeTransferFrom' cannot be named without a reference to '.pnpm/@tanstack+query-core@4.29.19/node_modules/@tanstack/query-core'. This is likely not portable. A type annotation is necessary.

1089 export function usePrepareErc721SafeTransferFrom(
                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

src/generated.ts:1105:17 - error TS2742: The inferred type of 'usePrepareErc721SetApprovalForAll' cannot be named without a reference to '.pnpm/@tanstack+query-core@4.29.19/node_modules/@tanstack/query-core'. This is likely not portable. A type annotation is necessary.

1105 export function usePrepareErc721SetApprovalForAll(
                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

src/generated.ts:1121:17 - error TS2742: The inferred type of 'usePrepareErc721TransferFrom' cannot be named without a reference to '.pnpm/@tanstack+query-core@4.29.19/node_modules/@tanstack/query-core'. This is likely not portable. A type annotation is necessary.

1121 export function usePrepareErc721TransferFrom(
                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

src/wagmi.ts:19:14 - error TS2742: The inferred type of 'config' cannot be named without a reference to '.pnpm/@tanstack+query-core@4.29.19/node_modules/@tanstack/query-core'. This is likely not portable. A type annotation is necessary.

19 export const config = createConfig({
                ~~~~~~

src/wagmi.ts:19:14 - error TS2742: The inferred type of 'config' cannot be named without a reference to '.pnpm/@wagmi+chains@0.2.25_typescript@5.0.4/node_modules/@wagmi/chains'. This is likely not portable. A type annotation is necessary.

19 export const config = createConfig({
                ~~~~~~

src/wagmi.ts:19:14 - error TS2742: The inferred type of 'config' cannot be named without a reference to '.pnpm/@wagmi+core@1.0.6_react@18.2.0_typescript@5.0.4_viem@0.3.36/node_modules/@wagmi/core'. This is likely not portable. A type annotation is necessary.

19 export const config = createConfig({
                ~~~~~~

src/wagmi.ts:19:14 - error TS2742: The inferred type of 'config' cannot be named without a reference to '.pnpm/@wagmi+core@1.0.6_react@18.2.0_typescript@5.0.4_viem@0.3.36/node_modules/@wagmi/core/dist/index-fc9ab085'. This is likely not portable. A type annotation is necessary.

19 export const config = createConfig({
```
