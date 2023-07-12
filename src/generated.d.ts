import { UseContractReadConfig, UseContractWriteConfig, UsePrepareContractWriteConfig, UseContractEventConfig } from 'wagmi';
import { ReadContractResult, WriteContractMode, PrepareWriteContractResult } from 'wagmi/actions';
export declare const erc20ABI: readonly [{
    readonly type: "event";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "spender";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "value";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Approval";
}, {
    readonly type: "event";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "to";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "value";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Transfer";
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly name: "spender";
        readonly type: "address";
    }];
    readonly name: "allowance";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly type: "uint8";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly type: "string";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly type: "string";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "totalSupply";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "transfer";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "addedValue";
        readonly type: "uint256";
    }];
    readonly name: "increaseAllowance";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "subtractedValue";
        readonly type: "uint256";
    }];
    readonly name: "decreaseAllowance";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}];
export declare const erc721ABI: readonly [{
    readonly type: "event";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "spender";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "Approval";
}, {
    readonly type: "event";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "operator";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "approved";
        readonly type: "bool";
        readonly indexed: false;
    }];
    readonly name: "ApprovalForAll";
}, {
    readonly type: "event";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "to";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "Transfer";
}, {
    readonly stateMutability: "payable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "getApproved";
    readonly outputs: readonly [{
        readonly type: "address";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly name: "operator";
        readonly type: "address";
    }];
    readonly name: "isApprovedForAll";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly type: "string";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "ownerOf";
    readonly outputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }];
}, {
    readonly stateMutability: "payable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly name: "id";
        readonly type: "uint256";
    }, {
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly type: "address";
    }, {
        readonly name: "approved";
        readonly type: "bool";
    }];
    readonly name: "setApprovalForAll";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly type: "string";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "index";
        readonly type: "uint256";
    }];
    readonly name: "tokenByIndex";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly name: "index";
        readonly type: "uint256";
    }];
    readonly name: "tokenByIndex";
    readonly outputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "tokenURI";
    readonly outputs: readonly [{
        readonly type: "string";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "totalSupply";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "payable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [];
}];
/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
 */
export declare function useErc20Read<TFunctionName extends string, TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>>(config?: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, 'abi'>): Pick<import("@tanstack/query-core").QueryObserverResult<TSelectData, Error>, "data" | "error" | "fetchStatus" | "isError" | "isFetched" | "isFetchedAfterMount" | "isFetching" | "isLoading" | "isRefetching" | "isSuccess" | "refetch"> & {
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    isIdle: boolean;
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    status: "error" | "idle" | "loading" | "success";
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    internal: Pick<import("@tanstack/query-core").QueryObserverResult, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
};
/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"allowance"`.
 */
export declare function useErc20Allowance<TFunctionName extends 'allowance', TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>>(config?: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'>): Pick<import("@tanstack/query-core").QueryObserverResult<TSelectData, Error>, "data" | "error" | "fetchStatus" | "isError" | "isFetched" | "isFetchedAfterMount" | "isFetching" | "isLoading" | "isRefetching" | "isSuccess" | "refetch"> & {
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    isIdle: boolean;
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    status: "error" | "idle" | "loading" | "success";
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    internal: Pick<import("@tanstack/query-core").QueryObserverResult, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
};
/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"balanceOf"`.
 */
export declare function useErc20BalanceOf<TFunctionName extends 'balanceOf', TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>>(config?: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'>): Pick<import("@tanstack/query-core").QueryObserverResult<TSelectData, Error>, "data" | "error" | "fetchStatus" | "isError" | "isFetched" | "isFetchedAfterMount" | "isFetching" | "isLoading" | "isRefetching" | "isSuccess" | "refetch"> & {
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    isIdle: boolean;
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    status: "error" | "idle" | "loading" | "success";
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    internal: Pick<import("@tanstack/query-core").QueryObserverResult, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
};
/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"decimals"`.
 */
export declare function useErc20Decimals<TFunctionName extends 'decimals', TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>>(config?: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'>): Pick<import("@tanstack/query-core").QueryObserverResult<TSelectData, Error>, "data" | "error" | "fetchStatus" | "isError" | "isFetched" | "isFetchedAfterMount" | "isFetching" | "isLoading" | "isRefetching" | "isSuccess" | "refetch"> & {
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    isIdle: boolean;
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    status: "error" | "idle" | "loading" | "success";
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    internal: Pick<import("@tanstack/query-core").QueryObserverResult, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
};
/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"name"`.
 */
export declare function useErc20Name<TFunctionName extends 'name', TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>>(config?: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'>): Pick<import("@tanstack/query-core").QueryObserverResult<TSelectData, Error>, "data" | "error" | "fetchStatus" | "isError" | "isFetched" | "isFetchedAfterMount" | "isFetching" | "isLoading" | "isRefetching" | "isSuccess" | "refetch"> & {
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    isIdle: boolean;
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    status: "error" | "idle" | "loading" | "success";
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    internal: Pick<import("@tanstack/query-core").QueryObserverResult, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
};
/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"symbol"`.
 */
export declare function useErc20Symbol<TFunctionName extends 'symbol', TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>>(config?: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'>): Pick<import("@tanstack/query-core").QueryObserverResult<TSelectData, Error>, "data" | "error" | "fetchStatus" | "isError" | "isFetched" | "isFetchedAfterMount" | "isFetching" | "isLoading" | "isRefetching" | "isSuccess" | "refetch"> & {
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    isIdle: boolean;
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    status: "error" | "idle" | "loading" | "success";
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    internal: Pick<import("@tanstack/query-core").QueryObserverResult, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
};
/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"totalSupply"`.
 */
export declare function useErc20TotalSupply<TFunctionName extends 'totalSupply', TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>>(config?: Omit<UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'>): Pick<import("@tanstack/query-core").QueryObserverResult<TSelectData, Error>, "data" | "error" | "fetchStatus" | "isError" | "isFetched" | "isFetchedAfterMount" | "isFetching" | "isLoading" | "isRefetching" | "isSuccess" | "refetch"> & {
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    isIdle: boolean;
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    status: "error" | "idle" | "loading" | "success";
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    internal: Pick<import("@tanstack/query-core").QueryObserverResult, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
};
/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__.
 */
export declare function useErc20Write<TFunctionName extends string, TMode extends WriteContractMode = undefined>(config?: TMode extends 'prepared' ? UseContractWriteConfig<PrepareWriteContractResult<typeof erc20ABI, string>['request']['abi'], TFunctionName, TMode> : UseContractWriteConfig<typeof erc20ABI, TFunctionName, TMode> & {
    abi?: never;
}): {
    data: import("@wagmi/core").WriteContractResult | undefined;
    error: Error | null;
    isError: boolean;
    isIdle: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    reset: () => void;
    status: "error" | "idle" | "loading" | "success";
    variables: ({
        mode?: undefined;
    } & Partial<Pick<Omit<import("@wagmi/core").WriteContractUnpreparedArgs<import("abitype").Abi, string>, "args">, "address" | "abi" | "functionName">> & Omit<Omit<import("@wagmi/core").WriteContractUnpreparedArgs<import("abitype").Abi, string>, "args">, "address" | "abi" | "functionName"> & Partial<{
        args?: readonly unknown[] | undefined;
    }> & {
        request?: undefined;
    }) | undefined;
    write: TMode extends "prepared" ? (() => void) | undefined : (config?: (Omit<import("viem").SendTransactionParameters, "chain" | "account"> & {
        args?: (import("@wagmi/core").WriteContractUnpreparedArgs<readonly [{
            readonly type: "event";
            readonly inputs: readonly [{
                readonly name: "owner";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "spender";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "value";
                readonly type: "uint256";
                readonly indexed: false;
            }];
            readonly name: "Approval";
        }, {
            readonly type: "event";
            readonly inputs: readonly [{
                readonly name: "from";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "to";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "value";
                readonly type: "uint256";
                readonly indexed: false;
            }];
            readonly name: "Transfer";
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly name: "spender";
                readonly type: "address";
            }];
            readonly name: "allowance";
            readonly outputs: readonly [{
                readonly type: "uint256";
            }];
        }, {
            readonly stateMutability: "nonpayable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "spender";
                readonly type: "address";
            }, {
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "approve";
            readonly outputs: readonly [{
                readonly type: "bool";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "account";
                readonly type: "address";
            }];
            readonly name: "balanceOf";
            readonly outputs: readonly [{
                readonly type: "uint256";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [];
            readonly name: "decimals";
            readonly outputs: readonly [{
                readonly type: "uint8";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [];
            readonly name: "name";
            readonly outputs: readonly [{
                readonly type: "string";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [];
            readonly name: "symbol";
            readonly outputs: readonly [{
                readonly type: "string";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [];
            readonly name: "totalSupply";
            readonly outputs: readonly [{
                readonly type: "uint256";
            }];
        }, {
            readonly stateMutability: "nonpayable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "transfer";
            readonly outputs: readonly [{
                readonly type: "bool";
            }];
        }, {
            readonly stateMutability: "nonpayable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "transferFrom";
            readonly outputs: readonly [{
                readonly type: "bool";
            }];
        }, {
            readonly stateMutability: "nonpayable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "spender";
                readonly type: "address";
            }, {
                readonly name: "addedValue";
                readonly type: "uint256";
            }];
            readonly name: "increaseAllowance";
            readonly outputs: readonly [{
                readonly type: "bool";
            }];
        }, {
            readonly stateMutability: "nonpayable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "spender";
                readonly type: "address";
            }, {
                readonly name: "subtractedValue";
                readonly type: "uint256";
            }];
            readonly name: "decreaseAllowance";
            readonly outputs: readonly [{
                readonly type: "bool";
            }];
        }], TFunctionName> extends {
            args: unknown;
        } ? ({
            args: unknown;
        } & Omit<import("viem").WriteContractParameters<readonly [{
            readonly type: "event";
            readonly inputs: readonly [{
                readonly name: "owner";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "spender";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "value";
                readonly type: "uint256";
                readonly indexed: false;
            }];
            readonly name: "Approval";
        }, {
            readonly type: "event";
            readonly inputs: readonly [{
                readonly name: "from";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "to";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "value";
                readonly type: "uint256";
                readonly indexed: false;
            }];
            readonly name: "Transfer";
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly name: "spender";
                readonly type: "address";
            }];
            readonly name: "allowance";
            readonly outputs: readonly [{
                readonly type: "uint256";
            }];
        }, {
            readonly stateMutability: "nonpayable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "spender";
                readonly type: "address";
            }, {
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "approve";
            readonly outputs: readonly [{
                readonly type: "bool";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "account";
                readonly type: "address";
            }];
            readonly name: "balanceOf";
            readonly outputs: readonly [{
                readonly type: "uint256";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [];
            readonly name: "decimals";
            readonly outputs: readonly [{
                readonly type: "uint8";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [];
            readonly name: "name";
            readonly outputs: readonly [{
                readonly type: "string";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [];
            readonly name: "symbol";
            readonly outputs: readonly [{
                readonly type: "string";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [];
            readonly name: "totalSupply";
            readonly outputs: readonly [{
                readonly type: "uint256";
            }];
        }, {
            readonly stateMutability: "nonpayable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "transfer";
            readonly outputs: readonly [{
                readonly type: "bool";
            }];
        }, {
            readonly stateMutability: "nonpayable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "transferFrom";
            readonly outputs: readonly [{
                readonly type: "bool";
            }];
        }, {
            readonly stateMutability: "nonpayable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "spender";
                readonly type: "address";
            }, {
                readonly name: "addedValue";
                readonly type: "uint256";
            }];
            readonly name: "increaseAllowance";
            readonly outputs: readonly [{
                readonly type: "bool";
            }];
        }, {
            readonly stateMutability: "nonpayable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "spender";
                readonly type: "address";
            }, {
                readonly name: "subtractedValue";
                readonly type: "uint256";
            }];
            readonly name: "decreaseAllowance";
            readonly outputs: readonly [{
                readonly type: "bool";
            }];
        }], TFunctionName, import("viem").Chain, import("viem").Account>, "chain"> & {
            chainId?: number | undefined;
            mode?: undefined;
        })["args"] : unknown) | undefined;
    }) | undefined) => void;
    writeAsync: TMode extends "prepared" ? (() => Promise<import("@wagmi/core").WriteContractResult>) | undefined : (config?: (Omit<import("viem").SendTransactionParameters, "chain" | "account"> & {
        args?: (import("@wagmi/core").WriteContractUnpreparedArgs<readonly [{
            readonly type: "event";
            readonly inputs: readonly [{
                readonly name: "owner";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "spender";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "value";
                readonly type: "uint256";
                readonly indexed: false;
            }];
            readonly name: "Approval";
        }, {
            readonly type: "event";
            readonly inputs: readonly [{
                readonly name: "from";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "to";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "value";
                readonly type: "uint256";
                readonly indexed: false;
            }];
            readonly name: "Transfer";
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly name: "spender";
                readonly type: "address";
            }];
            readonly name: "allowance";
            readonly outputs: readonly [{
                readonly type: "uint256";
            }];
        }, {
            readonly stateMutability: "nonpayable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "spender";
                readonly type: "address";
            }, {
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "approve";
            readonly outputs: readonly [{
                readonly type: "bool";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "account";
                readonly type: "address";
            }];
            readonly name: "balanceOf";
            readonly outputs: readonly [{
                readonly type: "uint256";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [];
            readonly name: "decimals";
            readonly outputs: readonly [{
                readonly type: "uint8";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [];
            readonly name: "name";
            readonly outputs: readonly [{
                readonly type: "string";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [];
            readonly name: "symbol";
            readonly outputs: readonly [{
                readonly type: "string";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [];
            readonly name: "totalSupply";
            readonly outputs: readonly [{
                readonly type: "uint256";
            }];
        }, {
            readonly stateMutability: "nonpayable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "transfer";
            readonly outputs: readonly [{
                readonly type: "bool";
            }];
        }, {
            readonly stateMutability: "nonpayable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "transferFrom";
            readonly outputs: readonly [{
                readonly type: "bool";
            }];
        }, {
            readonly stateMutability: "nonpayable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "spender";
                readonly type: "address";
            }, {
                readonly name: "addedValue";
                readonly type: "uint256";
            }];
            readonly name: "increaseAllowance";
            readonly outputs: readonly [{
                readonly type: "bool";
            }];
        }, {
            readonly stateMutability: "nonpayable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "spender";
                readonly type: "address";
            }, {
                readonly name: "subtractedValue";
                readonly type: "uint256";
            }];
            readonly name: "decreaseAllowance";
            readonly outputs: readonly [{
                readonly type: "bool";
            }];
        }], TFunctionName> extends {
            args: unknown;
        } ? ({
            args: unknown;
        } & Omit<import("viem").WriteContractParameters<readonly [{
            readonly type: "event";
            readonly inputs: readonly [{
                readonly name: "owner";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "spender";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "value";
                readonly type: "uint256";
                readonly indexed: false;
            }];
            readonly name: "Approval";
        }, {
            readonly type: "event";
            readonly inputs: readonly [{
                readonly name: "from";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "to";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "value";
                readonly type: "uint256";
                readonly indexed: false;
            }];
            readonly name: "Transfer";
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly name: "spender";
                readonly type: "address";
            }];
            readonly name: "allowance";
            readonly outputs: readonly [{
                readonly type: "uint256";
            }];
        }, {
            readonly stateMutability: "nonpayable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "spender";
                readonly type: "address";
            }, {
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "approve";
            readonly outputs: readonly [{
                readonly type: "bool";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "account";
                readonly type: "address";
            }];
            readonly name: "balanceOf";
            readonly outputs: readonly [{
                readonly type: "uint256";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [];
            readonly name: "decimals";
            readonly outputs: readonly [{
                readonly type: "uint8";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [];
            readonly name: "name";
            readonly outputs: readonly [{
                readonly type: "string";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [];
            readonly name: "symbol";
            readonly outputs: readonly [{
                readonly type: "string";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [];
            readonly name: "totalSupply";
            readonly outputs: readonly [{
                readonly type: "uint256";
            }];
        }, {
            readonly stateMutability: "nonpayable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "transfer";
            readonly outputs: readonly [{
                readonly type: "bool";
            }];
        }, {
            readonly stateMutability: "nonpayable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "transferFrom";
            readonly outputs: readonly [{
                readonly type: "bool";
            }];
        }, {
            readonly stateMutability: "nonpayable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "spender";
                readonly type: "address";
            }, {
                readonly name: "addedValue";
                readonly type: "uint256";
            }];
            readonly name: "increaseAllowance";
            readonly outputs: readonly [{
                readonly type: "bool";
            }];
        }, {
            readonly stateMutability: "nonpayable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "spender";
                readonly type: "address";
            }, {
                readonly name: "subtractedValue";
                readonly type: "uint256";
            }];
            readonly name: "decreaseAllowance";
            readonly outputs: readonly [{
                readonly type: "bool";
            }];
        }], TFunctionName, import("viem").Chain, import("viem").Account>, "chain"> & {
            chainId?: number | undefined;
            mode?: undefined;
        })["args"] : unknown) | undefined;
    }) | undefined) => Promise<import("@wagmi/core").WriteContractResult>;
};
/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"approve"`.
 */
export declare function useErc20Approve<TMode extends WriteContractMode = undefined>(config?: TMode extends 'prepared' ? UseContractWriteConfig<PrepareWriteContractResult<typeof erc20ABI, 'approve'>['request']['abi'], 'approve', TMode> & {
    functionName?: 'approve';
} : UseContractWriteConfig<typeof erc20ABI, 'approve', TMode> & {
    abi?: never;
    functionName?: 'approve';
}): {
    data: import("@wagmi/core").WriteContractResult | undefined;
    error: Error | null;
    isError: boolean;
    isIdle: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    reset: () => void;
    status: "error" | "idle" | "loading" | "success";
    variables: ({
        mode?: undefined;
    } & Partial<Pick<Omit<import("@wagmi/core").WriteContractUnpreparedArgs<import("abitype").Abi, string>, "args">, "address" | "abi" | "functionName">> & Omit<Omit<import("@wagmi/core").WriteContractUnpreparedArgs<import("abitype").Abi, string>, "args">, "address" | "abi" | "functionName"> & Partial<{
        args?: readonly unknown[] | undefined;
    }> & {
        request?: undefined;
    }) | undefined;
    write: TMode extends "prepared" ? (() => void) | undefined : (config?: (Omit<import("viem").SendTransactionParameters, "chain" | "account"> & {
        args?: readonly [`0x${string}`, bigint] | undefined;
    }) | undefined) => void;
    writeAsync: TMode extends "prepared" ? (() => Promise<import("@wagmi/core").WriteContractResult>) | undefined : (config?: (Omit<import("viem").SendTransactionParameters, "chain" | "account"> & {
        args?: readonly [`0x${string}`, bigint] | undefined;
    }) | undefined) => Promise<import("@wagmi/core").WriteContractResult>;
};
/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transfer"`.
 */
export declare function useErc20Transfer<TMode extends WriteContractMode = undefined>(config?: TMode extends 'prepared' ? UseContractWriteConfig<PrepareWriteContractResult<typeof erc20ABI, 'transfer'>['request']['abi'], 'transfer', TMode> & {
    functionName?: 'transfer';
} : UseContractWriteConfig<typeof erc20ABI, 'transfer', TMode> & {
    abi?: never;
    functionName?: 'transfer';
}): {
    data: import("@wagmi/core").WriteContractResult | undefined;
    error: Error | null;
    isError: boolean;
    isIdle: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    reset: () => void;
    status: "error" | "idle" | "loading" | "success";
    variables: ({
        mode?: undefined;
    } & Partial<Pick<Omit<import("@wagmi/core").WriteContractUnpreparedArgs<import("abitype").Abi, string>, "args">, "address" | "abi" | "functionName">> & Omit<Omit<import("@wagmi/core").WriteContractUnpreparedArgs<import("abitype").Abi, string>, "args">, "address" | "abi" | "functionName"> & Partial<{
        args?: readonly unknown[] | undefined;
    }> & {
        request?: undefined;
    }) | undefined;
    write: TMode extends "prepared" ? (() => void) | undefined : (config?: (Omit<import("viem").SendTransactionParameters, "chain" | "account"> & {
        args?: readonly [`0x${string}`, bigint] | undefined;
    }) | undefined) => void;
    writeAsync: TMode extends "prepared" ? (() => Promise<import("@wagmi/core").WriteContractResult>) | undefined : (config?: (Omit<import("viem").SendTransactionParameters, "chain" | "account"> & {
        args?: readonly [`0x${string}`, bigint] | undefined;
    }) | undefined) => Promise<import("@wagmi/core").WriteContractResult>;
};
/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export declare function useErc20TransferFrom<TMode extends WriteContractMode = undefined>(config?: TMode extends 'prepared' ? UseContractWriteConfig<PrepareWriteContractResult<typeof erc20ABI, 'transferFrom'>['request']['abi'], 'transferFrom', TMode> & {
    functionName?: 'transferFrom';
} : UseContractWriteConfig<typeof erc20ABI, 'transferFrom', TMode> & {
    abi?: never;
    functionName?: 'transferFrom';
}): {
    data: import("@wagmi/core").WriteContractResult | undefined;
    error: Error | null;
    isError: boolean;
    isIdle: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    reset: () => void;
    status: "error" | "idle" | "loading" | "success";
    variables: ({
        mode?: undefined;
    } & Partial<Pick<Omit<import("@wagmi/core").WriteContractUnpreparedArgs<import("abitype").Abi, string>, "args">, "address" | "abi" | "functionName">> & Omit<Omit<import("@wagmi/core").WriteContractUnpreparedArgs<import("abitype").Abi, string>, "args">, "address" | "abi" | "functionName"> & Partial<{
        args?: readonly unknown[] | undefined;
    }> & {
        request?: undefined;
    }) | undefined;
    write: TMode extends "prepared" ? (() => void) | undefined : (config?: (Omit<import("viem").SendTransactionParameters, "chain" | "account"> & {
        args?: readonly [`0x${string}`, `0x${string}`, bigint] | undefined;
    }) | undefined) => void;
    writeAsync: TMode extends "prepared" ? (() => Promise<import("@wagmi/core").WriteContractResult>) | undefined : (config?: (Omit<import("viem").SendTransactionParameters, "chain" | "account"> & {
        args?: readonly [`0x${string}`, `0x${string}`, bigint] | undefined;
    }) | undefined) => Promise<import("@wagmi/core").WriteContractResult>;
};
/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"increaseAllowance"`.
 */
export declare function useErc20IncreaseAllowance<TMode extends WriteContractMode = undefined>(config?: TMode extends 'prepared' ? UseContractWriteConfig<PrepareWriteContractResult<typeof erc20ABI, 'increaseAllowance'>['request']['abi'], 'increaseAllowance', TMode> & {
    functionName?: 'increaseAllowance';
} : UseContractWriteConfig<typeof erc20ABI, 'increaseAllowance', TMode> & {
    abi?: never;
    functionName?: 'increaseAllowance';
}): {
    data: import("@wagmi/core").WriteContractResult | undefined;
    error: Error | null;
    isError: boolean;
    isIdle: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    reset: () => void;
    status: "error" | "idle" | "loading" | "success";
    variables: ({
        mode?: undefined;
    } & Partial<Pick<Omit<import("@wagmi/core").WriteContractUnpreparedArgs<import("abitype").Abi, string>, "args">, "address" | "abi" | "functionName">> & Omit<Omit<import("@wagmi/core").WriteContractUnpreparedArgs<import("abitype").Abi, string>, "args">, "address" | "abi" | "functionName"> & Partial<{
        args?: readonly unknown[] | undefined;
    }> & {
        request?: undefined;
    }) | undefined;
    write: TMode extends "prepared" ? (() => void) | undefined : (config?: (Omit<import("viem").SendTransactionParameters, "chain" | "account"> & {
        args?: readonly [`0x${string}`, bigint] | undefined;
    }) | undefined) => void;
    writeAsync: TMode extends "prepared" ? (() => Promise<import("@wagmi/core").WriteContractResult>) | undefined : (config?: (Omit<import("viem").SendTransactionParameters, "chain" | "account"> & {
        args?: readonly [`0x${string}`, bigint] | undefined;
    }) | undefined) => Promise<import("@wagmi/core").WriteContractResult>;
};
/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"decreaseAllowance"`.
 */
export declare function useErc20DecreaseAllowance<TMode extends WriteContractMode = undefined>(config?: TMode extends 'prepared' ? UseContractWriteConfig<PrepareWriteContractResult<typeof erc20ABI, 'decreaseAllowance'>['request']['abi'], 'decreaseAllowance', TMode> & {
    functionName?: 'decreaseAllowance';
} : UseContractWriteConfig<typeof erc20ABI, 'decreaseAllowance', TMode> & {
    abi?: never;
    functionName?: 'decreaseAllowance';
}): {
    data: import("@wagmi/core").WriteContractResult | undefined;
    error: Error | null;
    isError: boolean;
    isIdle: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    reset: () => void;
    status: "error" | "idle" | "loading" | "success";
    variables: ({
        mode?: undefined;
    } & Partial<Pick<Omit<import("@wagmi/core").WriteContractUnpreparedArgs<import("abitype").Abi, string>, "args">, "address" | "abi" | "functionName">> & Omit<Omit<import("@wagmi/core").WriteContractUnpreparedArgs<import("abitype").Abi, string>, "args">, "address" | "abi" | "functionName"> & Partial<{
        args?: readonly unknown[] | undefined;
    }> & {
        request?: undefined;
    }) | undefined;
    write: TMode extends "prepared" ? (() => void) | undefined : (config?: (Omit<import("viem").SendTransactionParameters, "chain" | "account"> & {
        args?: readonly [`0x${string}`, bigint] | undefined;
    }) | undefined) => void;
    writeAsync: TMode extends "prepared" ? (() => Promise<import("@wagmi/core").WriteContractResult>) | undefined : (config?: (Omit<import("viem").SendTransactionParameters, "chain" | "account"> & {
        args?: readonly [`0x${string}`, bigint] | undefined;
    }) | undefined) => Promise<import("@wagmi/core").WriteContractResult>;
};
/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__.
 */
export declare function usePrepareErc20Write<TFunctionName extends string>(config?: Omit<UsePrepareContractWriteConfig<typeof erc20ABI, TFunctionName>, 'abi'>): Pick<import("@tanstack/query-core").QueryObserverResult<PrepareWriteContractResult<readonly [{
    readonly type: "event";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "spender";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "value";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Approval";
}, {
    readonly type: "event";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "to";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "value";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Transfer";
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly name: "spender";
        readonly type: "address";
    }];
    readonly name: "allowance";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly type: "uint8";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly type: "string";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly type: "string";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "totalSupply";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "transfer";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "addedValue";
        readonly type: "uint256";
    }];
    readonly name: "increaseAllowance";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "subtractedValue";
        readonly type: "uint256";
    }];
    readonly name: "decreaseAllowance";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}], TFunctionName, number>, Error>, "data" | "error" | "fetchStatus" | "isError" | "isFetched" | "isFetchedAfterMount" | "isFetching" | "isLoading" | "isRefetching" | "isSuccess" | "refetch"> & {
    isIdle: boolean;
    status: "error" | "idle" | "loading" | "success";
    internal: Pick<import("@tanstack/query-core").QueryObserverResult<unknown, unknown>, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
} & {
    config: PrepareWriteContractResult<readonly [{
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Approval";
    }, {
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Transfer";
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly type: "bool";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly type: "uint8";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly type: "string";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly type: "string";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly type: "bool";
        }];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly type: "bool";
        }];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly name: "addedValue";
            readonly type: "uint256";
        }];
        readonly name: "increaseAllowance";
        readonly outputs: readonly [{
            readonly type: "bool";
        }];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly name: "subtractedValue";
            readonly type: "uint256";
        }];
        readonly name: "decreaseAllowance";
        readonly outputs: readonly [{
            readonly type: "bool";
        }];
    }], TFunctionName, number>;
};
/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"approve"`.
 */
export declare function usePrepareErc20Approve(config?: Omit<UsePrepareContractWriteConfig<typeof erc20ABI, 'approve'>, 'abi' | 'functionName'>): Pick<import("@tanstack/query-core").QueryObserverResult<PrepareWriteContractResult<readonly [{
    readonly type: "event";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "spender";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "value";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Approval";
}, {
    readonly type: "event";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "to";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "value";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Transfer";
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly name: "spender";
        readonly type: "address";
    }];
    readonly name: "allowance";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly type: "uint8";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly type: "string";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly type: "string";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "totalSupply";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "transfer";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "addedValue";
        readonly type: "uint256";
    }];
    readonly name: "increaseAllowance";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "subtractedValue";
        readonly type: "uint256";
    }];
    readonly name: "decreaseAllowance";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}], "approve", number>, Error>, "data" | "error" | "fetchStatus" | "isError" | "isFetched" | "isFetchedAfterMount" | "isFetching" | "isLoading" | "isRefetching" | "isSuccess" | "refetch"> & {
    isIdle: boolean;
    status: "error" | "idle" | "loading" | "success";
    internal: Pick<import("@tanstack/query-core").QueryObserverResult<unknown, unknown>, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
} & {
    config: PrepareWriteContractResult<readonly [{
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Approval";
    }, {
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Transfer";
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly type: "bool";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly type: "uint8";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly type: "string";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly type: "string";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly type: "bool";
        }];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly type: "bool";
        }];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly name: "addedValue";
            readonly type: "uint256";
        }];
        readonly name: "increaseAllowance";
        readonly outputs: readonly [{
            readonly type: "bool";
        }];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly name: "subtractedValue";
            readonly type: "uint256";
        }];
        readonly name: "decreaseAllowance";
        readonly outputs: readonly [{
            readonly type: "bool";
        }];
    }], "approve", number>;
};
/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transfer"`.
 */
export declare function usePrepareErc20Transfer(config?: Omit<UsePrepareContractWriteConfig<typeof erc20ABI, 'transfer'>, 'abi' | 'functionName'>): Pick<import("@tanstack/query-core").QueryObserverResult<PrepareWriteContractResult<readonly [{
    readonly type: "event";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "spender";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "value";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Approval";
}, {
    readonly type: "event";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "to";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "value";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Transfer";
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly name: "spender";
        readonly type: "address";
    }];
    readonly name: "allowance";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly type: "uint8";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly type: "string";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly type: "string";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "totalSupply";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "transfer";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "addedValue";
        readonly type: "uint256";
    }];
    readonly name: "increaseAllowance";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "subtractedValue";
        readonly type: "uint256";
    }];
    readonly name: "decreaseAllowance";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}], "transfer", number>, Error>, "data" | "error" | "fetchStatus" | "isError" | "isFetched" | "isFetchedAfterMount" | "isFetching" | "isLoading" | "isRefetching" | "isSuccess" | "refetch"> & {
    isIdle: boolean;
    status: "error" | "idle" | "loading" | "success";
    internal: Pick<import("@tanstack/query-core").QueryObserverResult<unknown, unknown>, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
} & {
    config: PrepareWriteContractResult<readonly [{
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Approval";
    }, {
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Transfer";
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly type: "bool";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly type: "uint8";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly type: "string";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly type: "string";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly type: "bool";
        }];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly type: "bool";
        }];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly name: "addedValue";
            readonly type: "uint256";
        }];
        readonly name: "increaseAllowance";
        readonly outputs: readonly [{
            readonly type: "bool";
        }];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly name: "subtractedValue";
            readonly type: "uint256";
        }];
        readonly name: "decreaseAllowance";
        readonly outputs: readonly [{
            readonly type: "bool";
        }];
    }], "transfer", number>;
};
/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export declare function usePrepareErc20TransferFrom(config?: Omit<UsePrepareContractWriteConfig<typeof erc20ABI, 'transferFrom'>, 'abi' | 'functionName'>): Pick<import("@tanstack/query-core").QueryObserverResult<PrepareWriteContractResult<readonly [{
    readonly type: "event";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "spender";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "value";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Approval";
}, {
    readonly type: "event";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "to";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "value";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Transfer";
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly name: "spender";
        readonly type: "address";
    }];
    readonly name: "allowance";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly type: "uint8";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly type: "string";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly type: "string";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "totalSupply";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "transfer";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "addedValue";
        readonly type: "uint256";
    }];
    readonly name: "increaseAllowance";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "subtractedValue";
        readonly type: "uint256";
    }];
    readonly name: "decreaseAllowance";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}], "transferFrom", number>, Error>, "data" | "error" | "fetchStatus" | "isError" | "isFetched" | "isFetchedAfterMount" | "isFetching" | "isLoading" | "isRefetching" | "isSuccess" | "refetch"> & {
    isIdle: boolean;
    status: "error" | "idle" | "loading" | "success";
    internal: Pick<import("@tanstack/query-core").QueryObserverResult<unknown, unknown>, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
} & {
    config: PrepareWriteContractResult<readonly [{
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Approval";
    }, {
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Transfer";
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly type: "bool";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly type: "uint8";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly type: "string";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly type: "string";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly type: "bool";
        }];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly type: "bool";
        }];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly name: "addedValue";
            readonly type: "uint256";
        }];
        readonly name: "increaseAllowance";
        readonly outputs: readonly [{
            readonly type: "bool";
        }];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly name: "subtractedValue";
            readonly type: "uint256";
        }];
        readonly name: "decreaseAllowance";
        readonly outputs: readonly [{
            readonly type: "bool";
        }];
    }], "transferFrom", number>;
};
/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"increaseAllowance"`.
 */
export declare function usePrepareErc20IncreaseAllowance(config?: Omit<UsePrepareContractWriteConfig<typeof erc20ABI, 'increaseAllowance'>, 'abi' | 'functionName'>): Pick<import("@tanstack/query-core").QueryObserverResult<PrepareWriteContractResult<readonly [{
    readonly type: "event";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "spender";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "value";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Approval";
}, {
    readonly type: "event";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "to";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "value";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Transfer";
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly name: "spender";
        readonly type: "address";
    }];
    readonly name: "allowance";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly type: "uint8";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly type: "string";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly type: "string";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "totalSupply";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "transfer";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "addedValue";
        readonly type: "uint256";
    }];
    readonly name: "increaseAllowance";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "subtractedValue";
        readonly type: "uint256";
    }];
    readonly name: "decreaseAllowance";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}], "increaseAllowance", number>, Error>, "data" | "error" | "fetchStatus" | "isError" | "isFetched" | "isFetchedAfterMount" | "isFetching" | "isLoading" | "isRefetching" | "isSuccess" | "refetch"> & {
    isIdle: boolean;
    status: "error" | "idle" | "loading" | "success";
    internal: Pick<import("@tanstack/query-core").QueryObserverResult<unknown, unknown>, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
} & {
    config: PrepareWriteContractResult<readonly [{
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Approval";
    }, {
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Transfer";
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly type: "bool";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly type: "uint8";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly type: "string";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly type: "string";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly type: "bool";
        }];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly type: "bool";
        }];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly name: "addedValue";
            readonly type: "uint256";
        }];
        readonly name: "increaseAllowance";
        readonly outputs: readonly [{
            readonly type: "bool";
        }];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly name: "subtractedValue";
            readonly type: "uint256";
        }];
        readonly name: "decreaseAllowance";
        readonly outputs: readonly [{
            readonly type: "bool";
        }];
    }], "increaseAllowance", number>;
};
/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"decreaseAllowance"`.
 */
export declare function usePrepareErc20DecreaseAllowance(config?: Omit<UsePrepareContractWriteConfig<typeof erc20ABI, 'decreaseAllowance'>, 'abi' | 'functionName'>): Pick<import("@tanstack/query-core").QueryObserverResult<PrepareWriteContractResult<readonly [{
    readonly type: "event";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "spender";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "value";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Approval";
}, {
    readonly type: "event";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "to";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "value";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Transfer";
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly name: "spender";
        readonly type: "address";
    }];
    readonly name: "allowance";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly type: "uint8";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly type: "string";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly type: "string";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "totalSupply";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "transfer";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "addedValue";
        readonly type: "uint256";
    }];
    readonly name: "increaseAllowance";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "subtractedValue";
        readonly type: "uint256";
    }];
    readonly name: "decreaseAllowance";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}], "decreaseAllowance", number>, Error>, "data" | "error" | "fetchStatus" | "isError" | "isFetched" | "isFetchedAfterMount" | "isFetching" | "isLoading" | "isRefetching" | "isSuccess" | "refetch"> & {
    isIdle: boolean;
    status: "error" | "idle" | "loading" | "success";
    internal: Pick<import("@tanstack/query-core").QueryObserverResult<unknown, unknown>, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
} & {
    config: PrepareWriteContractResult<readonly [{
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Approval";
    }, {
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Transfer";
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly type: "bool";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly type: "uint8";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly type: "string";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly type: "string";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly type: "bool";
        }];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly type: "bool";
        }];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly name: "addedValue";
            readonly type: "uint256";
        }];
        readonly name: "increaseAllowance";
        readonly outputs: readonly [{
            readonly type: "bool";
        }];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly name: "subtractedValue";
            readonly type: "uint256";
        }];
        readonly name: "decreaseAllowance";
        readonly outputs: readonly [{
            readonly type: "bool";
        }];
    }], "decreaseAllowance", number>;
};
/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__.
 */
export declare function useErc20Event<TEventName extends string>(config?: Omit<UseContractEventConfig<typeof erc20ABI, TEventName>, 'abi'>): (() => void) | undefined;
/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__ and `eventName` set to `"Approval"`.
 */
export declare function useErc20ApprovalEvent(config?: Omit<UseContractEventConfig<typeof erc20ABI, 'Approval'>, 'abi' | 'eventName'>): (() => void) | undefined;
/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__ and `eventName` set to `"Transfer"`.
 */
export declare function useErc20TransferEvent(config?: Omit<UseContractEventConfig<typeof erc20ABI, 'Transfer'>, 'abi' | 'eventName'>): (() => void) | undefined;
/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__.
 */
export declare function useErc721Read<TFunctionName extends string, TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>>(config?: Omit<UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>, 'abi'>): Pick<import("@tanstack/query-core").QueryObserverResult<TSelectData, Error>, "data" | "error" | "fetchStatus" | "isError" | "isFetched" | "isFetchedAfterMount" | "isFetching" | "isLoading" | "isRefetching" | "isSuccess" | "refetch"> & {
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    isIdle: boolean;
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    status: "error" | "idle" | "loading" | "success";
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    internal: Pick<import("@tanstack/query-core").QueryObserverResult, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
};
/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"balanceOf"`.
 */
export declare function useErc721BalanceOf<TFunctionName extends 'balanceOf', TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>>(config?: Omit<UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'>): Pick<import("@tanstack/query-core").QueryObserverResult<TSelectData, Error>, "data" | "error" | "fetchStatus" | "isError" | "isFetched" | "isFetchedAfterMount" | "isFetching" | "isLoading" | "isRefetching" | "isSuccess" | "refetch"> & {
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    isIdle: boolean;
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    status: "error" | "idle" | "loading" | "success";
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    internal: Pick<import("@tanstack/query-core").QueryObserverResult, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
};
/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"getApproved"`.
 */
export declare function useErc721GetApproved<TFunctionName extends 'getApproved', TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>>(config?: Omit<UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'>): Pick<import("@tanstack/query-core").QueryObserverResult<TSelectData, Error>, "data" | "error" | "fetchStatus" | "isError" | "isFetched" | "isFetchedAfterMount" | "isFetching" | "isLoading" | "isRefetching" | "isSuccess" | "refetch"> & {
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    isIdle: boolean;
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    status: "error" | "idle" | "loading" | "success";
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    internal: Pick<import("@tanstack/query-core").QueryObserverResult, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
};
/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export declare function useErc721IsApprovedForAll<TFunctionName extends 'isApprovedForAll', TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>>(config?: Omit<UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'>): Pick<import("@tanstack/query-core").QueryObserverResult<TSelectData, Error>, "data" | "error" | "fetchStatus" | "isError" | "isFetched" | "isFetchedAfterMount" | "isFetching" | "isLoading" | "isRefetching" | "isSuccess" | "refetch"> & {
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    isIdle: boolean;
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    status: "error" | "idle" | "loading" | "success";
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    internal: Pick<import("@tanstack/query-core").QueryObserverResult, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
};
/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"name"`.
 */
export declare function useErc721Name<TFunctionName extends 'name', TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>>(config?: Omit<UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'>): Pick<import("@tanstack/query-core").QueryObserverResult<TSelectData, Error>, "data" | "error" | "fetchStatus" | "isError" | "isFetched" | "isFetchedAfterMount" | "isFetching" | "isLoading" | "isRefetching" | "isSuccess" | "refetch"> & {
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    isIdle: boolean;
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    status: "error" | "idle" | "loading" | "success";
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    internal: Pick<import("@tanstack/query-core").QueryObserverResult, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
};
/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"ownerOf"`.
 */
export declare function useErc721OwnerOf<TFunctionName extends 'ownerOf', TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>>(config?: Omit<UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'>): Pick<import("@tanstack/query-core").QueryObserverResult<TSelectData, Error>, "data" | "error" | "fetchStatus" | "isError" | "isFetched" | "isFetchedAfterMount" | "isFetching" | "isLoading" | "isRefetching" | "isSuccess" | "refetch"> & {
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    isIdle: boolean;
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    status: "error" | "idle" | "loading" | "success";
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    internal: Pick<import("@tanstack/query-core").QueryObserverResult, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
};
/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"symbol"`.
 */
export declare function useErc721Symbol<TFunctionName extends 'symbol', TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>>(config?: Omit<UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'>): Pick<import("@tanstack/query-core").QueryObserverResult<TSelectData, Error>, "data" | "error" | "fetchStatus" | "isError" | "isFetched" | "isFetchedAfterMount" | "isFetching" | "isLoading" | "isRefetching" | "isSuccess" | "refetch"> & {
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    isIdle: boolean;
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    status: "error" | "idle" | "loading" | "success";
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    internal: Pick<import("@tanstack/query-core").QueryObserverResult, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
};
/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"tokenByIndex"`.
 */
export declare function useErc721TokenByIndex<TFunctionName extends 'tokenByIndex', TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>>(config?: Omit<UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'>): Pick<import("@tanstack/query-core").QueryObserverResult<TSelectData, Error>, "data" | "error" | "fetchStatus" | "isError" | "isFetched" | "isFetchedAfterMount" | "isFetching" | "isLoading" | "isRefetching" | "isSuccess" | "refetch"> & {
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    isIdle: boolean;
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    status: "error" | "idle" | "loading" | "success";
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    internal: Pick<import("@tanstack/query-core").QueryObserverResult, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
};
/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"tokenURI"`.
 */
export declare function useErc721TokenUri<TFunctionName extends 'tokenURI', TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>>(config?: Omit<UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'>): Pick<import("@tanstack/query-core").QueryObserverResult<TSelectData, Error>, "data" | "error" | "fetchStatus" | "isError" | "isFetched" | "isFetchedAfterMount" | "isFetching" | "isLoading" | "isRefetching" | "isSuccess" | "refetch"> & {
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    isIdle: boolean;
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    status: "error" | "idle" | "loading" | "success";
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    internal: Pick<import("@tanstack/query-core").QueryObserverResult, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
};
/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"totalSupply"`.
 */
export declare function useErc721TotalSupply<TFunctionName extends 'totalSupply', TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>>(config?: Omit<UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'>): Pick<import("@tanstack/query-core").QueryObserverResult<TSelectData, Error>, "data" | "error" | "fetchStatus" | "isError" | "isFetched" | "isFetchedAfterMount" | "isFetching" | "isLoading" | "isRefetching" | "isSuccess" | "refetch"> & {
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    isIdle: boolean;
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    status: "error" | "idle" | "loading" | "success";
    /**
     * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
     */
    internal: Pick<import("@tanstack/query-core").QueryObserverResult, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
};
/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__.
 */
export declare function useErc721Write<TFunctionName extends string, TMode extends WriteContractMode = undefined>(config?: TMode extends 'prepared' ? UseContractWriteConfig<PrepareWriteContractResult<typeof erc721ABI, string>['request']['abi'], TFunctionName, TMode> : UseContractWriteConfig<typeof erc721ABI, TFunctionName, TMode> & {
    abi?: never;
}): {
    data: import("@wagmi/core").WriteContractResult | undefined;
    error: Error | null;
    isError: boolean;
    isIdle: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    reset: () => void;
    status: "error" | "idle" | "loading" | "success";
    variables: ({
        mode?: undefined;
    } & Partial<Pick<Omit<import("@wagmi/core").WriteContractUnpreparedArgs<import("abitype").Abi, string>, "args">, "address" | "abi" | "functionName">> & Omit<Omit<import("@wagmi/core").WriteContractUnpreparedArgs<import("abitype").Abi, string>, "args">, "address" | "abi" | "functionName"> & Partial<{
        args?: readonly unknown[] | undefined;
    }> & {
        request?: undefined;
    }) | undefined;
    write: TMode extends "prepared" ? (() => void) | undefined : (config?: (Omit<import("viem").SendTransactionParameters, "chain" | "account"> & {
        args?: (import("@wagmi/core").WriteContractUnpreparedArgs<readonly [{
            readonly type: "event";
            readonly inputs: readonly [{
                readonly name: "owner";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "spender";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "tokenId";
                readonly type: "uint256";
                readonly indexed: true;
            }];
            readonly name: "Approval";
        }, {
            readonly type: "event";
            readonly inputs: readonly [{
                readonly name: "owner";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "operator";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "approved";
                readonly type: "bool";
                readonly indexed: false;
            }];
            readonly name: "ApprovalForAll";
        }, {
            readonly type: "event";
            readonly inputs: readonly [{
                readonly name: "from";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "to";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "tokenId";
                readonly type: "uint256";
                readonly indexed: true;
            }];
            readonly name: "Transfer";
        }, {
            readonly stateMutability: "payable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "spender";
                readonly type: "address";
            }, {
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly name: "approve";
            readonly outputs: readonly [];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "account";
                readonly type: "address";
            }];
            readonly name: "balanceOf";
            readonly outputs: readonly [{
                readonly type: "uint256";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly name: "getApproved";
            readonly outputs: readonly [{
                readonly type: "address";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly name: "operator";
                readonly type: "address";
            }];
            readonly name: "isApprovedForAll";
            readonly outputs: readonly [{
                readonly type: "bool";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [];
            readonly name: "name";
            readonly outputs: readonly [{
                readonly type: "string";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly name: "ownerOf";
            readonly outputs: readonly [{
                readonly name: "owner";
                readonly type: "address";
            }];
        }, {
            readonly stateMutability: "payable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly name: "safeTransferFrom";
            readonly outputs: readonly [];
        }, {
            readonly stateMutability: "nonpayable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly name: "id";
                readonly type: "uint256";
            }, {
                readonly name: "data";
                readonly type: "bytes";
            }];
            readonly name: "safeTransferFrom";
            readonly outputs: readonly [];
        }, {
            readonly stateMutability: "nonpayable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "operator";
                readonly type: "address";
            }, {
                readonly name: "approved";
                readonly type: "bool";
            }];
            readonly name: "setApprovalForAll";
            readonly outputs: readonly [];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [];
            readonly name: "symbol";
            readonly outputs: readonly [{
                readonly type: "string";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "index";
                readonly type: "uint256";
            }];
            readonly name: "tokenByIndex";
            readonly outputs: readonly [{
                readonly type: "uint256";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly name: "index";
                readonly type: "uint256";
            }];
            readonly name: "tokenByIndex";
            readonly outputs: readonly [{
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly name: "tokenURI";
            readonly outputs: readonly [{
                readonly type: "string";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [];
            readonly name: "totalSupply";
            readonly outputs: readonly [{
                readonly type: "uint256";
            }];
        }, {
            readonly stateMutability: "payable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly name: "transferFrom";
            readonly outputs: readonly [];
        }], TFunctionName> extends {
            args: unknown;
        } ? ({
            args: unknown;
        } & Omit<import("viem").WriteContractParameters<readonly [{
            readonly type: "event";
            readonly inputs: readonly [{
                readonly name: "owner";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "spender";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "tokenId";
                readonly type: "uint256";
                readonly indexed: true;
            }];
            readonly name: "Approval";
        }, {
            readonly type: "event";
            readonly inputs: readonly [{
                readonly name: "owner";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "operator";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "approved";
                readonly type: "bool";
                readonly indexed: false;
            }];
            readonly name: "ApprovalForAll";
        }, {
            readonly type: "event";
            readonly inputs: readonly [{
                readonly name: "from";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "to";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "tokenId";
                readonly type: "uint256";
                readonly indexed: true;
            }];
            readonly name: "Transfer";
        }, {
            readonly stateMutability: "payable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "spender";
                readonly type: "address";
            }, {
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly name: "approve";
            readonly outputs: readonly [];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "account";
                readonly type: "address";
            }];
            readonly name: "balanceOf";
            readonly outputs: readonly [{
                readonly type: "uint256";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly name: "getApproved";
            readonly outputs: readonly [{
                readonly type: "address";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly name: "operator";
                readonly type: "address";
            }];
            readonly name: "isApprovedForAll";
            readonly outputs: readonly [{
                readonly type: "bool";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [];
            readonly name: "name";
            readonly outputs: readonly [{
                readonly type: "string";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly name: "ownerOf";
            readonly outputs: readonly [{
                readonly name: "owner";
                readonly type: "address";
            }];
        }, {
            readonly stateMutability: "payable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly name: "safeTransferFrom";
            readonly outputs: readonly [];
        }, {
            readonly stateMutability: "nonpayable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly name: "id";
                readonly type: "uint256";
            }, {
                readonly name: "data";
                readonly type: "bytes";
            }];
            readonly name: "safeTransferFrom";
            readonly outputs: readonly [];
        }, {
            readonly stateMutability: "nonpayable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "operator";
                readonly type: "address";
            }, {
                readonly name: "approved";
                readonly type: "bool";
            }];
            readonly name: "setApprovalForAll";
            readonly outputs: readonly [];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [];
            readonly name: "symbol";
            readonly outputs: readonly [{
                readonly type: "string";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "index";
                readonly type: "uint256";
            }];
            readonly name: "tokenByIndex";
            readonly outputs: readonly [{
                readonly type: "uint256";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly name: "index";
                readonly type: "uint256";
            }];
            readonly name: "tokenByIndex";
            readonly outputs: readonly [{
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly name: "tokenURI";
            readonly outputs: readonly [{
                readonly type: "string";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [];
            readonly name: "totalSupply";
            readonly outputs: readonly [{
                readonly type: "uint256";
            }];
        }, {
            readonly stateMutability: "payable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly name: "transferFrom";
            readonly outputs: readonly [];
        }], TFunctionName, import("viem").Chain, import("viem").Account>, "chain"> & {
            chainId?: number | undefined;
            mode?: undefined;
        })["args"] : unknown) | undefined;
    }) | undefined) => void;
    writeAsync: TMode extends "prepared" ? (() => Promise<import("@wagmi/core").WriteContractResult>) | undefined : (config?: (Omit<import("viem").SendTransactionParameters, "chain" | "account"> & {
        args?: (import("@wagmi/core").WriteContractUnpreparedArgs<readonly [{
            readonly type: "event";
            readonly inputs: readonly [{
                readonly name: "owner";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "spender";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "tokenId";
                readonly type: "uint256";
                readonly indexed: true;
            }];
            readonly name: "Approval";
        }, {
            readonly type: "event";
            readonly inputs: readonly [{
                readonly name: "owner";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "operator";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "approved";
                readonly type: "bool";
                readonly indexed: false;
            }];
            readonly name: "ApprovalForAll";
        }, {
            readonly type: "event";
            readonly inputs: readonly [{
                readonly name: "from";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "to";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "tokenId";
                readonly type: "uint256";
                readonly indexed: true;
            }];
            readonly name: "Transfer";
        }, {
            readonly stateMutability: "payable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "spender";
                readonly type: "address";
            }, {
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly name: "approve";
            readonly outputs: readonly [];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "account";
                readonly type: "address";
            }];
            readonly name: "balanceOf";
            readonly outputs: readonly [{
                readonly type: "uint256";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly name: "getApproved";
            readonly outputs: readonly [{
                readonly type: "address";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly name: "operator";
                readonly type: "address";
            }];
            readonly name: "isApprovedForAll";
            readonly outputs: readonly [{
                readonly type: "bool";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [];
            readonly name: "name";
            readonly outputs: readonly [{
                readonly type: "string";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly name: "ownerOf";
            readonly outputs: readonly [{
                readonly name: "owner";
                readonly type: "address";
            }];
        }, {
            readonly stateMutability: "payable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly name: "safeTransferFrom";
            readonly outputs: readonly [];
        }, {
            readonly stateMutability: "nonpayable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly name: "id";
                readonly type: "uint256";
            }, {
                readonly name: "data";
                readonly type: "bytes";
            }];
            readonly name: "safeTransferFrom";
            readonly outputs: readonly [];
        }, {
            readonly stateMutability: "nonpayable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "operator";
                readonly type: "address";
            }, {
                readonly name: "approved";
                readonly type: "bool";
            }];
            readonly name: "setApprovalForAll";
            readonly outputs: readonly [];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [];
            readonly name: "symbol";
            readonly outputs: readonly [{
                readonly type: "string";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "index";
                readonly type: "uint256";
            }];
            readonly name: "tokenByIndex";
            readonly outputs: readonly [{
                readonly type: "uint256";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly name: "index";
                readonly type: "uint256";
            }];
            readonly name: "tokenByIndex";
            readonly outputs: readonly [{
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly name: "tokenURI";
            readonly outputs: readonly [{
                readonly type: "string";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [];
            readonly name: "totalSupply";
            readonly outputs: readonly [{
                readonly type: "uint256";
            }];
        }, {
            readonly stateMutability: "payable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly name: "transferFrom";
            readonly outputs: readonly [];
        }], TFunctionName> extends {
            args: unknown;
        } ? ({
            args: unknown;
        } & Omit<import("viem").WriteContractParameters<readonly [{
            readonly type: "event";
            readonly inputs: readonly [{
                readonly name: "owner";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "spender";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "tokenId";
                readonly type: "uint256";
                readonly indexed: true;
            }];
            readonly name: "Approval";
        }, {
            readonly type: "event";
            readonly inputs: readonly [{
                readonly name: "owner";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "operator";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "approved";
                readonly type: "bool";
                readonly indexed: false;
            }];
            readonly name: "ApprovalForAll";
        }, {
            readonly type: "event";
            readonly inputs: readonly [{
                readonly name: "from";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "to";
                readonly type: "address";
                readonly indexed: true;
            }, {
                readonly name: "tokenId";
                readonly type: "uint256";
                readonly indexed: true;
            }];
            readonly name: "Transfer";
        }, {
            readonly stateMutability: "payable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "spender";
                readonly type: "address";
            }, {
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly name: "approve";
            readonly outputs: readonly [];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "account";
                readonly type: "address";
            }];
            readonly name: "balanceOf";
            readonly outputs: readonly [{
                readonly type: "uint256";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly name: "getApproved";
            readonly outputs: readonly [{
                readonly type: "address";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly name: "operator";
                readonly type: "address";
            }];
            readonly name: "isApprovedForAll";
            readonly outputs: readonly [{
                readonly type: "bool";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [];
            readonly name: "name";
            readonly outputs: readonly [{
                readonly type: "string";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly name: "ownerOf";
            readonly outputs: readonly [{
                readonly name: "owner";
                readonly type: "address";
            }];
        }, {
            readonly stateMutability: "payable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly name: "safeTransferFrom";
            readonly outputs: readonly [];
        }, {
            readonly stateMutability: "nonpayable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly name: "id";
                readonly type: "uint256";
            }, {
                readonly name: "data";
                readonly type: "bytes";
            }];
            readonly name: "safeTransferFrom";
            readonly outputs: readonly [];
        }, {
            readonly stateMutability: "nonpayable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "operator";
                readonly type: "address";
            }, {
                readonly name: "approved";
                readonly type: "bool";
            }];
            readonly name: "setApprovalForAll";
            readonly outputs: readonly [];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [];
            readonly name: "symbol";
            readonly outputs: readonly [{
                readonly type: "string";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "index";
                readonly type: "uint256";
            }];
            readonly name: "tokenByIndex";
            readonly outputs: readonly [{
                readonly type: "uint256";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly name: "index";
                readonly type: "uint256";
            }];
            readonly name: "tokenByIndex";
            readonly outputs: readonly [{
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly name: "tokenURI";
            readonly outputs: readonly [{
                readonly type: "string";
            }];
        }, {
            readonly stateMutability: "view";
            readonly type: "function";
            readonly inputs: readonly [];
            readonly name: "totalSupply";
            readonly outputs: readonly [{
                readonly type: "uint256";
            }];
        }, {
            readonly stateMutability: "payable";
            readonly type: "function";
            readonly inputs: readonly [{
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly name: "transferFrom";
            readonly outputs: readonly [];
        }], TFunctionName, import("viem").Chain, import("viem").Account>, "chain"> & {
            chainId?: number | undefined;
            mode?: undefined;
        })["args"] : unknown) | undefined;
    }) | undefined) => Promise<import("@wagmi/core").WriteContractResult>;
};
/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"approve"`.
 */
export declare function useErc721Approve<TMode extends WriteContractMode = undefined>(config?: TMode extends 'prepared' ? UseContractWriteConfig<PrepareWriteContractResult<typeof erc721ABI, 'approve'>['request']['abi'], 'approve', TMode> & {
    functionName?: 'approve';
} : UseContractWriteConfig<typeof erc721ABI, 'approve', TMode> & {
    abi?: never;
    functionName?: 'approve';
}): {
    data: import("@wagmi/core").WriteContractResult | undefined;
    error: Error | null;
    isError: boolean;
    isIdle: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    reset: () => void;
    status: "error" | "idle" | "loading" | "success";
    variables: ({
        mode?: undefined;
    } & Partial<Pick<Omit<import("@wagmi/core").WriteContractUnpreparedArgs<import("abitype").Abi, string>, "args">, "address" | "abi" | "functionName">> & Omit<Omit<import("@wagmi/core").WriteContractUnpreparedArgs<import("abitype").Abi, string>, "args">, "address" | "abi" | "functionName"> & Partial<{
        args?: readonly unknown[] | undefined;
    }> & {
        request?: undefined;
    }) | undefined;
    write: TMode extends "prepared" ? (() => void) | undefined : (config?: (Omit<import("viem").SendTransactionParameters, "chain" | "account"> & {
        args?: readonly [`0x${string}`, bigint] | undefined;
    }) | undefined) => void;
    writeAsync: TMode extends "prepared" ? (() => Promise<import("@wagmi/core").WriteContractResult>) | undefined : (config?: (Omit<import("viem").SendTransactionParameters, "chain" | "account"> & {
        args?: readonly [`0x${string}`, bigint] | undefined;
    }) | undefined) => Promise<import("@wagmi/core").WriteContractResult>;
};
/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export declare function useErc721SafeTransferFrom<TMode extends WriteContractMode = undefined>(config?: TMode extends 'prepared' ? UseContractWriteConfig<PrepareWriteContractResult<typeof erc721ABI, 'safeTransferFrom'>['request']['abi'], 'safeTransferFrom', TMode> & {
    functionName?: 'safeTransferFrom';
} : UseContractWriteConfig<typeof erc721ABI, 'safeTransferFrom', TMode> & {
    abi?: never;
    functionName?: 'safeTransferFrom';
}): {
    data: import("@wagmi/core").WriteContractResult | undefined;
    error: Error | null;
    isError: boolean;
    isIdle: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    reset: () => void;
    status: "error" | "idle" | "loading" | "success";
    variables: ({
        mode?: undefined;
    } & Partial<Pick<Omit<import("@wagmi/core").WriteContractUnpreparedArgs<import("abitype").Abi, string>, "args">, "address" | "abi" | "functionName">> & Omit<Omit<import("@wagmi/core").WriteContractUnpreparedArgs<import("abitype").Abi, string>, "args">, "address" | "abi" | "functionName"> & Partial<{
        args?: readonly unknown[] | undefined;
    }> & {
        request?: undefined;
    }) | undefined;
    write: TMode extends "prepared" ? (() => void) | undefined : (config?: (Omit<import("viem").SendTransactionParameters, "chain" | "account"> & {
        args?: readonly [`0x${string}`, `0x${string}`, bigint] | readonly [`0x${string}`, `0x${string}`, bigint, `0x${string}`] | undefined;
    }) | undefined) => void;
    writeAsync: TMode extends "prepared" ? (() => Promise<import("@wagmi/core").WriteContractResult>) | undefined : (config?: (Omit<import("viem").SendTransactionParameters, "chain" | "account"> & {
        args?: readonly [`0x${string}`, `0x${string}`, bigint] | readonly [`0x${string}`, `0x${string}`, bigint, `0x${string}`] | undefined;
    }) | undefined) => Promise<import("@wagmi/core").WriteContractResult>;
};
/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export declare function useErc721SetApprovalForAll<TMode extends WriteContractMode = undefined>(config?: TMode extends 'prepared' ? UseContractWriteConfig<PrepareWriteContractResult<typeof erc721ABI, 'setApprovalForAll'>['request']['abi'], 'setApprovalForAll', TMode> & {
    functionName?: 'setApprovalForAll';
} : UseContractWriteConfig<typeof erc721ABI, 'setApprovalForAll', TMode> & {
    abi?: never;
    functionName?: 'setApprovalForAll';
}): {
    data: import("@wagmi/core").WriteContractResult | undefined;
    error: Error | null;
    isError: boolean;
    isIdle: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    reset: () => void;
    status: "error" | "idle" | "loading" | "success";
    variables: ({
        mode?: undefined;
    } & Partial<Pick<Omit<import("@wagmi/core").WriteContractUnpreparedArgs<import("abitype").Abi, string>, "args">, "address" | "abi" | "functionName">> & Omit<Omit<import("@wagmi/core").WriteContractUnpreparedArgs<import("abitype").Abi, string>, "args">, "address" | "abi" | "functionName"> & Partial<{
        args?: readonly unknown[] | undefined;
    }> & {
        request?: undefined;
    }) | undefined;
    write: TMode extends "prepared" ? (() => void) | undefined : (config?: (Omit<import("viem").SendTransactionParameters, "chain" | "account"> & {
        args?: readonly [`0x${string}`, boolean] | undefined;
    }) | undefined) => void;
    writeAsync: TMode extends "prepared" ? (() => Promise<import("@wagmi/core").WriteContractResult>) | undefined : (config?: (Omit<import("viem").SendTransactionParameters, "chain" | "account"> & {
        args?: readonly [`0x${string}`, boolean] | undefined;
    }) | undefined) => Promise<import("@wagmi/core").WriteContractResult>;
};
/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export declare function useErc721TransferFrom<TMode extends WriteContractMode = undefined>(config?: TMode extends 'prepared' ? UseContractWriteConfig<PrepareWriteContractResult<typeof erc721ABI, 'transferFrom'>['request']['abi'], 'transferFrom', TMode> & {
    functionName?: 'transferFrom';
} : UseContractWriteConfig<typeof erc721ABI, 'transferFrom', TMode> & {
    abi?: never;
    functionName?: 'transferFrom';
}): {
    data: import("@wagmi/core").WriteContractResult | undefined;
    error: Error | null;
    isError: boolean;
    isIdle: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    reset: () => void;
    status: "error" | "idle" | "loading" | "success";
    variables: ({
        mode?: undefined;
    } & Partial<Pick<Omit<import("@wagmi/core").WriteContractUnpreparedArgs<import("abitype").Abi, string>, "args">, "address" | "abi" | "functionName">> & Omit<Omit<import("@wagmi/core").WriteContractUnpreparedArgs<import("abitype").Abi, string>, "args">, "address" | "abi" | "functionName"> & Partial<{
        args?: readonly unknown[] | undefined;
    }> & {
        request?: undefined;
    }) | undefined;
    write: TMode extends "prepared" ? (() => void) | undefined : (config?: (Omit<import("viem").SendTransactionParameters, "chain" | "account"> & {
        args?: readonly [`0x${string}`, `0x${string}`, bigint] | undefined;
    }) | undefined) => void;
    writeAsync: TMode extends "prepared" ? (() => Promise<import("@wagmi/core").WriteContractResult>) | undefined : (config?: (Omit<import("viem").SendTransactionParameters, "chain" | "account"> & {
        args?: readonly [`0x${string}`, `0x${string}`, bigint] | undefined;
    }) | undefined) => Promise<import("@wagmi/core").WriteContractResult>;
};
/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__.
 */
export declare function usePrepareErc721Write<TFunctionName extends string>(config?: Omit<UsePrepareContractWriteConfig<typeof erc721ABI, TFunctionName>, 'abi'>): Pick<import("@tanstack/query-core").QueryObserverResult<PrepareWriteContractResult<readonly [{
    readonly type: "event";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "spender";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "Approval";
}, {
    readonly type: "event";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "operator";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "approved";
        readonly type: "bool";
        readonly indexed: false;
    }];
    readonly name: "ApprovalForAll";
}, {
    readonly type: "event";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "to";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "Transfer";
}, {
    readonly stateMutability: "payable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "getApproved";
    readonly outputs: readonly [{
        readonly type: "address";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly name: "operator";
        readonly type: "address";
    }];
    readonly name: "isApprovedForAll";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly type: "string";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "ownerOf";
    readonly outputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }];
}, {
    readonly stateMutability: "payable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly name: "id";
        readonly type: "uint256";
    }, {
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly type: "address";
    }, {
        readonly name: "approved";
        readonly type: "bool";
    }];
    readonly name: "setApprovalForAll";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly type: "string";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "index";
        readonly type: "uint256";
    }];
    readonly name: "tokenByIndex";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly name: "index";
        readonly type: "uint256";
    }];
    readonly name: "tokenByIndex";
    readonly outputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "tokenURI";
    readonly outputs: readonly [{
        readonly type: "string";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "totalSupply";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "payable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [];
}], TFunctionName, number>, Error>, "data" | "error" | "fetchStatus" | "isError" | "isFetched" | "isFetchedAfterMount" | "isFetching" | "isLoading" | "isRefetching" | "isSuccess" | "refetch"> & {
    isIdle: boolean;
    status: "error" | "idle" | "loading" | "success";
    internal: Pick<import("@tanstack/query-core").QueryObserverResult<unknown, unknown>, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
} & {
    config: PrepareWriteContractResult<readonly [{
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "tokenId";
            readonly type: "uint256";
            readonly indexed: true;
        }];
        readonly name: "Approval";
    }, {
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "operator";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "approved";
            readonly type: "bool";
            readonly indexed: false;
        }];
        readonly name: "ApprovalForAll";
    }, {
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "tokenId";
            readonly type: "uint256";
            readonly indexed: true;
        }];
        readonly name: "Transfer";
    }, {
        readonly stateMutability: "payable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "getApproved";
        readonly outputs: readonly [{
            readonly type: "address";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly name: "operator";
            readonly type: "address";
        }];
        readonly name: "isApprovedForAll";
        readonly outputs: readonly [{
            readonly type: "bool";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly type: "string";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "ownerOf";
        readonly outputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
        }];
    }, {
        readonly stateMutability: "payable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "safeTransferFrom";
        readonly outputs: readonly [];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly name: "id";
            readonly type: "uint256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "safeTransferFrom";
        readonly outputs: readonly [];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly name: "approved";
            readonly type: "bool";
        }];
        readonly name: "setApprovalForAll";
        readonly outputs: readonly [];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly type: "string";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "tokenByIndex";
        readonly outputs: readonly [{
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "tokenByIndex";
        readonly outputs: readonly [{
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "tokenURI";
        readonly outputs: readonly [{
            readonly type: "string";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "payable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [];
    }], TFunctionName, number>;
};
/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"approve"`.
 */
export declare function usePrepareErc721Approve(config?: Omit<UsePrepareContractWriteConfig<typeof erc721ABI, 'approve'>, 'abi' | 'functionName'>): Pick<import("@tanstack/query-core").QueryObserverResult<PrepareWriteContractResult<readonly [{
    readonly type: "event";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "spender";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "Approval";
}, {
    readonly type: "event";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "operator";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "approved";
        readonly type: "bool";
        readonly indexed: false;
    }];
    readonly name: "ApprovalForAll";
}, {
    readonly type: "event";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "to";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "Transfer";
}, {
    readonly stateMutability: "payable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "getApproved";
    readonly outputs: readonly [{
        readonly type: "address";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly name: "operator";
        readonly type: "address";
    }];
    readonly name: "isApprovedForAll";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly type: "string";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "ownerOf";
    readonly outputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }];
}, {
    readonly stateMutability: "payable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly name: "id";
        readonly type: "uint256";
    }, {
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly type: "address";
    }, {
        readonly name: "approved";
        readonly type: "bool";
    }];
    readonly name: "setApprovalForAll";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly type: "string";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "index";
        readonly type: "uint256";
    }];
    readonly name: "tokenByIndex";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly name: "index";
        readonly type: "uint256";
    }];
    readonly name: "tokenByIndex";
    readonly outputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "tokenURI";
    readonly outputs: readonly [{
        readonly type: "string";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "totalSupply";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "payable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [];
}], "approve", number>, Error>, "data" | "error" | "fetchStatus" | "isError" | "isFetched" | "isFetchedAfterMount" | "isFetching" | "isLoading" | "isRefetching" | "isSuccess" | "refetch"> & {
    isIdle: boolean;
    status: "error" | "idle" | "loading" | "success";
    internal: Pick<import("@tanstack/query-core").QueryObserverResult<unknown, unknown>, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
} & {
    config: PrepareWriteContractResult<readonly [{
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "tokenId";
            readonly type: "uint256";
            readonly indexed: true;
        }];
        readonly name: "Approval";
    }, {
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "operator";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "approved";
            readonly type: "bool";
            readonly indexed: false;
        }];
        readonly name: "ApprovalForAll";
    }, {
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "tokenId";
            readonly type: "uint256";
            readonly indexed: true;
        }];
        readonly name: "Transfer";
    }, {
        readonly stateMutability: "payable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "getApproved";
        readonly outputs: readonly [{
            readonly type: "address";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly name: "operator";
            readonly type: "address";
        }];
        readonly name: "isApprovedForAll";
        readonly outputs: readonly [{
            readonly type: "bool";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly type: "string";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "ownerOf";
        readonly outputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
        }];
    }, {
        readonly stateMutability: "payable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "safeTransferFrom";
        readonly outputs: readonly [];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly name: "id";
            readonly type: "uint256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "safeTransferFrom";
        readonly outputs: readonly [];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly name: "approved";
            readonly type: "bool";
        }];
        readonly name: "setApprovalForAll";
        readonly outputs: readonly [];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly type: "string";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "tokenByIndex";
        readonly outputs: readonly [{
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "tokenByIndex";
        readonly outputs: readonly [{
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "tokenURI";
        readonly outputs: readonly [{
            readonly type: "string";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "payable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [];
    }], "approve", number>;
};
/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export declare function usePrepareErc721SafeTransferFrom(config?: Omit<UsePrepareContractWriteConfig<typeof erc721ABI, 'safeTransferFrom'>, 'abi' | 'functionName'>): Pick<import("@tanstack/query-core").QueryObserverResult<PrepareWriteContractResult<readonly [{
    readonly type: "event";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "spender";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "Approval";
}, {
    readonly type: "event";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "operator";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "approved";
        readonly type: "bool";
        readonly indexed: false;
    }];
    readonly name: "ApprovalForAll";
}, {
    readonly type: "event";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "to";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "Transfer";
}, {
    readonly stateMutability: "payable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "getApproved";
    readonly outputs: readonly [{
        readonly type: "address";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly name: "operator";
        readonly type: "address";
    }];
    readonly name: "isApprovedForAll";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly type: "string";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "ownerOf";
    readonly outputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }];
}, {
    readonly stateMutability: "payable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly name: "id";
        readonly type: "uint256";
    }, {
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly type: "address";
    }, {
        readonly name: "approved";
        readonly type: "bool";
    }];
    readonly name: "setApprovalForAll";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly type: "string";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "index";
        readonly type: "uint256";
    }];
    readonly name: "tokenByIndex";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly name: "index";
        readonly type: "uint256";
    }];
    readonly name: "tokenByIndex";
    readonly outputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "tokenURI";
    readonly outputs: readonly [{
        readonly type: "string";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "totalSupply";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "payable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [];
}], "safeTransferFrom", number>, Error>, "data" | "error" | "fetchStatus" | "isError" | "isFetched" | "isFetchedAfterMount" | "isFetching" | "isLoading" | "isRefetching" | "isSuccess" | "refetch"> & {
    isIdle: boolean;
    status: "error" | "idle" | "loading" | "success";
    internal: Pick<import("@tanstack/query-core").QueryObserverResult<unknown, unknown>, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
} & {
    config: PrepareWriteContractResult<readonly [{
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "tokenId";
            readonly type: "uint256";
            readonly indexed: true;
        }];
        readonly name: "Approval";
    }, {
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "operator";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "approved";
            readonly type: "bool";
            readonly indexed: false;
        }];
        readonly name: "ApprovalForAll";
    }, {
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "tokenId";
            readonly type: "uint256";
            readonly indexed: true;
        }];
        readonly name: "Transfer";
    }, {
        readonly stateMutability: "payable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "getApproved";
        readonly outputs: readonly [{
            readonly type: "address";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly name: "operator";
            readonly type: "address";
        }];
        readonly name: "isApprovedForAll";
        readonly outputs: readonly [{
            readonly type: "bool";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly type: "string";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "ownerOf";
        readonly outputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
        }];
    }, {
        readonly stateMutability: "payable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "safeTransferFrom";
        readonly outputs: readonly [];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly name: "id";
            readonly type: "uint256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "safeTransferFrom";
        readonly outputs: readonly [];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly name: "approved";
            readonly type: "bool";
        }];
        readonly name: "setApprovalForAll";
        readonly outputs: readonly [];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly type: "string";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "tokenByIndex";
        readonly outputs: readonly [{
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "tokenByIndex";
        readonly outputs: readonly [{
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "tokenURI";
        readonly outputs: readonly [{
            readonly type: "string";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "payable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [];
    }], "safeTransferFrom", number>;
};
/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export declare function usePrepareErc721SetApprovalForAll(config?: Omit<UsePrepareContractWriteConfig<typeof erc721ABI, 'setApprovalForAll'>, 'abi' | 'functionName'>): Pick<import("@tanstack/query-core").QueryObserverResult<PrepareWriteContractResult<readonly [{
    readonly type: "event";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "spender";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "Approval";
}, {
    readonly type: "event";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "operator";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "approved";
        readonly type: "bool";
        readonly indexed: false;
    }];
    readonly name: "ApprovalForAll";
}, {
    readonly type: "event";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "to";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "Transfer";
}, {
    readonly stateMutability: "payable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "getApproved";
    readonly outputs: readonly [{
        readonly type: "address";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly name: "operator";
        readonly type: "address";
    }];
    readonly name: "isApprovedForAll";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly type: "string";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "ownerOf";
    readonly outputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }];
}, {
    readonly stateMutability: "payable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly name: "id";
        readonly type: "uint256";
    }, {
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly type: "address";
    }, {
        readonly name: "approved";
        readonly type: "bool";
    }];
    readonly name: "setApprovalForAll";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly type: "string";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "index";
        readonly type: "uint256";
    }];
    readonly name: "tokenByIndex";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly name: "index";
        readonly type: "uint256";
    }];
    readonly name: "tokenByIndex";
    readonly outputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "tokenURI";
    readonly outputs: readonly [{
        readonly type: "string";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "totalSupply";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "payable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [];
}], "setApprovalForAll", number>, Error>, "data" | "error" | "fetchStatus" | "isError" | "isFetched" | "isFetchedAfterMount" | "isFetching" | "isLoading" | "isRefetching" | "isSuccess" | "refetch"> & {
    isIdle: boolean;
    status: "error" | "idle" | "loading" | "success";
    internal: Pick<import("@tanstack/query-core").QueryObserverResult<unknown, unknown>, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
} & {
    config: PrepareWriteContractResult<readonly [{
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "tokenId";
            readonly type: "uint256";
            readonly indexed: true;
        }];
        readonly name: "Approval";
    }, {
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "operator";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "approved";
            readonly type: "bool";
            readonly indexed: false;
        }];
        readonly name: "ApprovalForAll";
    }, {
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "tokenId";
            readonly type: "uint256";
            readonly indexed: true;
        }];
        readonly name: "Transfer";
    }, {
        readonly stateMutability: "payable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "getApproved";
        readonly outputs: readonly [{
            readonly type: "address";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly name: "operator";
            readonly type: "address";
        }];
        readonly name: "isApprovedForAll";
        readonly outputs: readonly [{
            readonly type: "bool";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly type: "string";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "ownerOf";
        readonly outputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
        }];
    }, {
        readonly stateMutability: "payable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "safeTransferFrom";
        readonly outputs: readonly [];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly name: "id";
            readonly type: "uint256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "safeTransferFrom";
        readonly outputs: readonly [];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly name: "approved";
            readonly type: "bool";
        }];
        readonly name: "setApprovalForAll";
        readonly outputs: readonly [];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly type: "string";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "tokenByIndex";
        readonly outputs: readonly [{
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "tokenByIndex";
        readonly outputs: readonly [{
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "tokenURI";
        readonly outputs: readonly [{
            readonly type: "string";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "payable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [];
    }], "setApprovalForAll", number>;
};
/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export declare function usePrepareErc721TransferFrom(config?: Omit<UsePrepareContractWriteConfig<typeof erc721ABI, 'transferFrom'>, 'abi' | 'functionName'>): Pick<import("@tanstack/query-core").QueryObserverResult<PrepareWriteContractResult<readonly [{
    readonly type: "event";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "spender";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "Approval";
}, {
    readonly type: "event";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "operator";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "approved";
        readonly type: "bool";
        readonly indexed: false;
    }];
    readonly name: "ApprovalForAll";
}, {
    readonly type: "event";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "to";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "Transfer";
}, {
    readonly stateMutability: "payable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "getApproved";
    readonly outputs: readonly [{
        readonly type: "address";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly name: "operator";
        readonly type: "address";
    }];
    readonly name: "isApprovedForAll";
    readonly outputs: readonly [{
        readonly type: "bool";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly type: "string";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "ownerOf";
    readonly outputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }];
}, {
    readonly stateMutability: "payable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly name: "id";
        readonly type: "uint256";
    }, {
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly type: "address";
    }, {
        readonly name: "approved";
        readonly type: "bool";
    }];
    readonly name: "setApprovalForAll";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly type: "string";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "index";
        readonly type: "uint256";
    }];
    readonly name: "tokenByIndex";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly name: "index";
        readonly type: "uint256";
    }];
    readonly name: "tokenByIndex";
    readonly outputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "tokenURI";
    readonly outputs: readonly [{
        readonly type: "string";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "totalSupply";
    readonly outputs: readonly [{
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "payable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [];
}], "transferFrom", number>, Error>, "data" | "error" | "fetchStatus" | "isError" | "isFetched" | "isFetchedAfterMount" | "isFetching" | "isLoading" | "isRefetching" | "isSuccess" | "refetch"> & {
    isIdle: boolean;
    status: "error" | "idle" | "loading" | "success";
    internal: Pick<import("@tanstack/query-core").QueryObserverResult<unknown, unknown>, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
} & {
    config: PrepareWriteContractResult<readonly [{
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "tokenId";
            readonly type: "uint256";
            readonly indexed: true;
        }];
        readonly name: "Approval";
    }, {
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "operator";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "approved";
            readonly type: "bool";
            readonly indexed: false;
        }];
        readonly name: "ApprovalForAll";
    }, {
        readonly type: "event";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "tokenId";
            readonly type: "uint256";
            readonly indexed: true;
        }];
        readonly name: "Transfer";
    }, {
        readonly stateMutability: "payable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "getApproved";
        readonly outputs: readonly [{
            readonly type: "address";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly name: "operator";
            readonly type: "address";
        }];
        readonly name: "isApprovedForAll";
        readonly outputs: readonly [{
            readonly type: "bool";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly type: "string";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "ownerOf";
        readonly outputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
        }];
    }, {
        readonly stateMutability: "payable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "safeTransferFrom";
        readonly outputs: readonly [];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly name: "id";
            readonly type: "uint256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "safeTransferFrom";
        readonly outputs: readonly [];
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly name: "approved";
            readonly type: "bool";
        }];
        readonly name: "setApprovalForAll";
        readonly outputs: readonly [];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly type: "string";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "tokenByIndex";
        readonly outputs: readonly [{
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "tokenByIndex";
        readonly outputs: readonly [{
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "tokenURI";
        readonly outputs: readonly [{
            readonly type: "string";
        }];
    }, {
        readonly stateMutability: "view";
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly type: "uint256";
        }];
    }, {
        readonly stateMutability: "payable";
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [];
    }], "transferFrom", number>;
};
/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__.
 */
export declare function useErc721Event<TEventName extends string>(config?: Omit<UseContractEventConfig<typeof erc721ABI, TEventName>, 'abi'>): (() => void) | undefined;
/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__ and `eventName` set to `"Approval"`.
 */
export declare function useErc721ApprovalEvent(config?: Omit<UseContractEventConfig<typeof erc721ABI, 'Approval'>, 'abi' | 'eventName'>): (() => void) | undefined;
/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export declare function useErc721ApprovalForAllEvent(config?: Omit<UseContractEventConfig<typeof erc721ABI, 'ApprovalForAll'>, 'abi' | 'eventName'>): (() => void) | undefined;
/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__ and `eventName` set to `"Transfer"`.
 */
export declare function useErc721TransferEvent(config?: Omit<UseContractEventConfig<typeof erc721ABI, 'Transfer'>, 'abi' | 'eventName'>): (() => void) | undefined;
