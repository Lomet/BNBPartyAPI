/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const tokenUpdated = /* GraphQL */ `subscription TokenUpdated($tokenId: Int!) {
  tokenUpdated(tokenId: $tokenId) {
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
` as GeneratedSubscription<
  APITypes.TokenUpdatedSubscriptionVariables,
  APITypes.TokenUpdatedSubscription
>;
export const newComment = /* GraphQL */ `subscription NewComment($tokenId: Int!) {
  newComment(tokenId: $tokenId) {
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
` as GeneratedSubscription<
  APITypes.NewCommentSubscriptionVariables,
  APITypes.NewCommentSubscription
>;
export const newToken = /* GraphQL */ `subscription NewToken {
  newToken {
    tokenId
    isNew
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.NewTokenSubscriptionVariables,
  APITypes.NewTokenSubscription
>;
export const likedComment = /* GraphQL */ `subscription LikedComment($tokenId: Int!, $commentID: Int!) {
  likedComment(tokenId: $tokenId, commentID: $commentID) {
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
` as GeneratedSubscription<
  APITypes.LikedCommentSubscriptionVariables,
  APITypes.LikedCommentSubscription
>;
export const likedToken = /* GraphQL */ `subscription LikedToken($tokenId: Int!) {
  likedToken(tokenId: $tokenId) {
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
` as GeneratedSubscription<
  APITypes.LikedTokenSubscriptionVariables,
  APITypes.LikedTokenSubscription
>;
