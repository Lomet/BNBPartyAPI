/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type NewToken = {
  __typename: "NewToken",
  tokenId: number,
  isNew: boolean,
};

export type OffChainDataInput = {
  content?: string | null,
  icon?: string | null,
  Website?: string | null,
  X?: string | null,
  Discord?: string | null,
  Telegram?: string | null,
};

export type Token = {
  __typename: "Token",
  tokenId: number,
  tokenAddress: string,
  chainId: string,
  makerAddress: string,
  flpAddress: string,
  creationTransaction: string,
  createdAt: string,
  Block: number,
  offChainData: OffChainData,
};

export type OffChainData = {
  __typename: "OffChainData",
  content?: string | null,
  icon?: string | null,
  Website?: string | null,
  X?: string | null,
  Discord?: string | null,
  Telegram?: string | null,
  likeCounter: number,
};

export type Comment = {
  __typename: "Comment",
  commentId: number,
  tokenId: number,
  userAddress: string,
  content: string,
  icon?: string | null,
  likeCounter: number,
  createdAt: string,
};

export type Comments = {
  __typename: "Comments",
  commentsCount: number,
  items?:  Array<Comment > | null,
};

export type UserBalance = {
  __typename: "UserBalance",
  address: string,
  bigIntAmount: string,
};

export type GenerateAuthMutationVariables = {
  sign: string,
  message: string,
};

export type GenerateAuthMutation = {
  generateAuth: string,
};

export type DeleteAuthMutationVariables = {
  sign: string,
};

export type DeleteAuthMutation = {
  // add AuthToken to DynamoDB with user address
  deleteAuth: boolean,
};

export type InsertTokenMutationVariables = {
  chainID: string,
  txHash: string,
};

export type InsertTokenMutation = {
  // set deleted = true the AuthToken from DynamoDB for self
  insertToken:  {
    __typename: "NewToken",
    tokenId: number,
    isNew: boolean,
  },
};

export type UpdateTokenContentMutationVariables = {
  tokenId: number,
  offChainData: OffChainDataInput,
};

export type UpdateTokenContentMutation = {
  // public for bot, still validate TX and not exist
  updateTokenContent:  {
    __typename: "Token",
    tokenId: number,
    tokenAddress: string,
    chainId: string,
    makerAddress: string,
    flpAddress: string,
    creationTransaction: string,
    createdAt: string,
    Block: number,
    offChainData:  {
      __typename: "OffChainData",
      content?: string | null,
      icon?: string | null,
      Website?: string | null,
      X?: string | null,
      Discord?: string | null,
      Telegram?: string | null,
      likeCounter: number,
    },
  },
};

export type LikeCommentMutationVariables = {
  tokenId: number,
  commentId: number,
};

export type LikeCommentMutation = {
  // only makerAddress of the token
  likeComment:  {
    __typename: "Comment",
    commentId: number,
    tokenId: number,
    userAddress: string,
    content: string,
    icon?: string | null,
    likeCounter: number,
    createdAt: string,
  },
};

export type LikeTokenMutationVariables = {
  tokenId: number,
};

export type LikeTokenMutation = {
  likeToken:  {
    __typename: "Token",
    tokenId: number,
    tokenAddress: string,
    chainId: string,
    makerAddress: string,
    flpAddress: string,
    creationTransaction: string,
    createdAt: string,
    Block: number,
    offChainData:  {
      __typename: "OffChainData",
      content?: string | null,
      icon?: string | null,
      Website?: string | null,
      X?: string | null,
      Discord?: string | null,
      Telegram?: string | null,
      likeCounter: number,
    },
  },
};

export type AddCommentMutationVariables = {
  tokenId: number,
  content: string,
  icon?: string | null,
};

export type AddCommentMutation = {
  // if commentId == null, then it's for tokenID, the commentID must match the tokenID
  addComment:  {
    __typename: "Comment",
    commentId: number,
    tokenId: number,
    userAddress: string,
    content: string,
    icon?: string | null,
    likeCounter: number,
    createdAt: string,
  },
};

export type GetTokenByTokenAddressQueryVariables = {
  chainId: string,
  tokenAddress: string,
};

export type GetTokenByTokenAddressQuery = {
  getTokenByTokenAddress?:  {
    __typename: "Token",
    tokenId: number,
    tokenAddress: string,
    chainId: string,
    makerAddress: string,
    flpAddress: string,
    creationTransaction: string,
    createdAt: string,
    Block: number,
    offChainData:  {
      __typename: "OffChainData",
      content?: string | null,
      icon?: string | null,
      Website?: string | null,
      X?: string | null,
      Discord?: string | null,
      Telegram?: string | null,
      likeCounter: number,
    },
  } | null,
};

export type GetTokenQueryVariables = {
  tokenId: number,
};

export type GetTokenQuery = {
  getToken?:  {
    __typename: "Token",
    tokenId: number,
    tokenAddress: string,
    chainId: string,
    makerAddress: string,
    flpAddress: string,
    creationTransaction: string,
    createdAt: string,
    Block: number,
    offChainData:  {
      __typename: "OffChainData",
      content?: string | null,
      icon?: string | null,
      Website?: string | null,
      X?: string | null,
      Discord?: string | null,
      Telegram?: string | null,
      likeCounter: number,
    },
  } | null,
};

export type ListTokensByDateQueryVariables = {
  chainId: string,
  limit: number,
  page: number,
};

export type ListTokensByDateQuery = {
  listTokensByDate:  Array< {
    __typename: "Token",
    tokenId: number,
    tokenAddress: string,
    chainId: string,
    makerAddress: string,
    flpAddress: string,
    creationTransaction: string,
    createdAt: string,
    Block: number,
    offChainData:  {
      __typename: "OffChainData",
      content?: string | null,
      icon?: string | null,
      Website?: string | null,
      X?: string | null,
      Discord?: string | null,
      Telegram?: string | null,
      likeCounter: number,
    },
  } >,
};

export type ListTokensByLikeQueryVariables = {
  chainId: string,
  limit: number,
  page: number,
};

export type ListTokensByLikeQuery = {
  listTokensByLike:  Array< {
    __typename: "Token",
    tokenId: number,
    tokenAddress: string,
    chainId: string,
    makerAddress: string,
    flpAddress: string,
    creationTransaction: string,
    createdAt: string,
    Block: number,
    offChainData:  {
      __typename: "OffChainData",
      content?: string | null,
      icon?: string | null,
      Website?: string | null,
      X?: string | null,
      Discord?: string | null,
      Telegram?: string | null,
      likeCounter: number,
    },
  } >,
};

export type ListMyTokensQueryVariables = {
  chainId: string,
  limit: number,
  page: number,
};

export type ListMyTokensQuery = {
  listMyTokens?:  Array< {
    __typename: "Token",
    tokenId: number,
    tokenAddress: string,
    chainId: string,
    makerAddress: string,
    flpAddress: string,
    creationTransaction: string,
    createdAt: string,
    Block: number,
    offChainData:  {
      __typename: "OffChainData",
      content?: string | null,
      icon?: string | null,
      Website?: string | null,
      X?: string | null,
      Discord?: string | null,
      Telegram?: string | null,
      likeCounter: number,
    },
  } > | null,
};

export type CountTokensQueryVariables = {
};

export type CountTokensQuery = {
  countTokens: number,
};

export type MyAddressQueryVariables = {
};

export type MyAddressQuery = {
  myAddress: string,
};

export type GetCommentQueryVariables = {
  tokenId: number,
  limit: number,
  page: number,
};

export type GetCommentQuery = {
  getComment:  {
    __typename: "Comments",
    commentsCount: number,
    items?:  Array< {
      __typename: "Comment",
      commentId: number,
      tokenId: number,
      userAddress: string,
      content: string,
      icon?: string | null,
      likeCounter: number,
      createdAt: string,
    } > | null,
  },
};

export type GetTokenHoldersQueryVariables = {
  chainId: string,
  tokenAddress: string,
};

export type GetTokenHoldersQuery = {
  getTokenHolders?:  Array< {
    __typename: "UserBalance",
    address: string,
    bigIntAmount: string,
  } > | null,
};

export type TokenUpdatedSubscriptionVariables = {
  tokenId: number,
};

export type TokenUpdatedSubscription = {
  tokenUpdated?:  {
    __typename: "Token",
    tokenId: number,
    tokenAddress: string,
    chainId: string,
    makerAddress: string,
    flpAddress: string,
    creationTransaction: string,
    createdAt: string,
    Block: number,
    offChainData:  {
      __typename: "OffChainData",
      content?: string | null,
      icon?: string | null,
      Website?: string | null,
      X?: string | null,
      Discord?: string | null,
      Telegram?: string | null,
      likeCounter: number,
    },
  } | null,
};

export type NewCommentSubscriptionVariables = {
  tokenId: number,
};

export type NewCommentSubscription = {
  // used only on updateTokenContent
  newComment?:  {
    __typename: "Comment",
    commentId: number,
    tokenId: number,
    userAddress: string,
    content: string,
    icon?: string | null,
    likeCounter: number,
    createdAt: string,
  } | null,
};

export type NewTokenSubscriptionVariables = {
};

export type NewTokenSubscription = {
  // for each Token
  newToken?:  {
    __typename: "NewToken",
    tokenId: number,
    isNew: boolean,
  } | null,
};

export type LikedCommentSubscriptionVariables = {
  tokenId: number,
  commentID: number,
};

export type LikedCommentSubscription = {
  // both for createToken and insertToken
  likedComment?:  {
    __typename: "Comment",
    commentId: number,
    tokenId: number,
    userAddress: string,
    content: string,
    icon?: string | null,
    likeCounter: number,
    createdAt: string,
  } | null,
};

export type LikedTokenSubscriptionVariables = {
  tokenId: number,
};

export type LikedTokenSubscription = {
  likedToken?:  {
    __typename: "Token",
    tokenId: number,
    tokenAddress: string,
    chainId: string,
    makerAddress: string,
    flpAddress: string,
    creationTransaction: string,
    createdAt: string,
    Block: number,
    offChainData:  {
      __typename: "OffChainData",
      content?: string | null,
      icon?: string | null,
      Website?: string | null,
      X?: string | null,
      Discord?: string | null,
      Telegram?: string | null,
      likeCounter: number,
    },
  } | null,
};
