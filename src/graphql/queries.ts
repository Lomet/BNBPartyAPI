/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getTokenByTokenAddress = /* GraphQL */ `query GetTokenByTokenAddress($chainId: Long!, $tokenAddress: String!) {
  getTokenByTokenAddress(chainId: $chainId, tokenAddress: $tokenAddress) {
    tokenId
    tokenAddress
    chainId
    makerAddress
    flpAddress
    creationTransaction
    createdAt
    Block
    offChainData {
      content
      icon
      Website
      X
      Discord
      Telegram
      likeCounter
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTokenByTokenAddressQueryVariables,
  APITypes.GetTokenByTokenAddressQuery
>;
export const getToken = /* GraphQL */ `query GetToken($tokenId: Int!) {
  getToken(tokenId: $tokenId) {
    tokenId
    tokenAddress
    chainId
    makerAddress
    flpAddress
    creationTransaction
    createdAt
    Block
    offChainData {
      content
      icon
      Website
      X
      Discord
      Telegram
      likeCounter
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTokenQueryVariables, APITypes.GetTokenQuery>;
export const listTokensByDate = /* GraphQL */ `query ListTokensByDate($chainId: Long!, $limit: Int!, $page: Int!) {
  listTokensByDate(chainId: $chainId, limit: $limit, page: $page) {
    tokenId
    tokenAddress
    chainId
    makerAddress
    flpAddress
    creationTransaction
    createdAt
    Block
    offChainData {
      content
      icon
      Website
      X
      Discord
      Telegram
      likeCounter
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTokensByDateQueryVariables,
  APITypes.ListTokensByDateQuery
>;
export const listTokensByLike = /* GraphQL */ `query ListTokensByLike($chainId: Long!, $limit: Int!, $page: Int!) {
  listTokensByLike(chainId: $chainId, limit: $limit, page: $page) {
    tokenId
    tokenAddress
    chainId
    makerAddress
    flpAddress
    creationTransaction
    createdAt
    Block
    offChainData {
      content
      icon
      Website
      X
      Discord
      Telegram
      likeCounter
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTokensByLikeQueryVariables,
  APITypes.ListTokensByLikeQuery
>;
export const listMyTokens = /* GraphQL */ `query ListMyTokens($chainId: Long!, $limit: Int!, $page: Int!) {
  listMyTokens(chainId: $chainId, limit: $limit, page: $page) {
    tokenId
    tokenAddress
    chainId
    makerAddress
    flpAddress
    creationTransaction
    createdAt
    Block
    offChainData {
      content
      icon
      Website
      X
      Discord
      Telegram
      likeCounter
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMyTokensQueryVariables,
  APITypes.ListMyTokensQuery
>;
export const countTokens = /* GraphQL */ `query CountTokens {
  countTokens
}
` as GeneratedQuery<
  APITypes.CountTokensQueryVariables,
  APITypes.CountTokensQuery
>;
export const myAddress = /* GraphQL */ `query MyAddress {
  myAddress
}
` as GeneratedQuery<APITypes.MyAddressQueryVariables, APITypes.MyAddressQuery>;
export const getComment = /* GraphQL */ `query GetComment($tokenId: Int!, $limit: Int!, $page: Int!) {
  getComment(tokenId: $tokenId, limit: $limit, page: $page) {
    commentsCount
    items {
      commentId
      tokenId
      userAddress
      content
      icon
      likeCounter
      createdAt
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCommentQueryVariables,
  APITypes.GetCommentQuery
>;
export const getTokenHolders = /* GraphQL */ `query GetTokenHolders($chainId: Long!, $tokenAddress: String!) {
  getTokenHolders(chainId: $chainId, tokenAddress: $tokenAddress) {
    address
    bigIntAmount
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTokenHoldersQueryVariables,
  APITypes.GetTokenHoldersQuery
>;
