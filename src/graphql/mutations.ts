/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const generateAuth = /* GraphQL */ `mutation GenerateAuth($sign: String!, $message: String!) {
  generateAuth(sign: $sign, message: $message)
}
` as GeneratedMutation<
  APITypes.GenerateAuthMutationVariables,
  APITypes.GenerateAuthMutation
>;
export const deleteAuth = /* GraphQL */ `mutation DeleteAuth($sign: String!) {
  deleteAuth(sign: $sign)
}
` as GeneratedMutation<
  APITypes.DeleteAuthMutationVariables,
  APITypes.DeleteAuthMutation
>;
export const insertToken = /* GraphQL */ `mutation InsertToken($chainID: Long!, $txHash: String!) {
  insertToken(chainID: $chainID, txHash: $txHash) {
    tokenId
    isNew
    __typename
  }
}
` as GeneratedMutation<
  APITypes.InsertTokenMutationVariables,
  APITypes.InsertTokenMutation
>;
export const updateTokenContent = /* GraphQL */ `mutation UpdateTokenContent($tokenId: Int!, $offChainData: OffChainDataInput!) {
  updateTokenContent(tokenId: $tokenId, offChainData: $offChainData) {
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
` as GeneratedMutation<
  APITypes.UpdateTokenContentMutationVariables,
  APITypes.UpdateTokenContentMutation
>;
export const likeComment = /* GraphQL */ `mutation LikeComment($tokenId: Int!, $commentId: Int!) {
  likeComment(tokenId: $tokenId, commentId: $commentId) {
    commentId
    tokenId
    userAddress
    content
    icon
    likeCounter
    createdAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.LikeCommentMutationVariables,
  APITypes.LikeCommentMutation
>;
export const likeToken = /* GraphQL */ `mutation LikeToken($tokenId: Int!) {
  likeToken(tokenId: $tokenId) {
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
` as GeneratedMutation<
  APITypes.LikeTokenMutationVariables,
  APITypes.LikeTokenMutation
>;
export const addComment = /* GraphQL */ `mutation AddComment($tokenId: Int!, $content: String!, $icon: String) {
  addComment(tokenId: $tokenId, content: $content, icon: $icon) {
    commentId
    tokenId
    userAddress
    content
    icon
    likeCounter
    createdAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.AddCommentMutationVariables,
  APITypes.AddCommentMutation
>;
