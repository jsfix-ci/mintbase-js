"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_TOKENS_BY_OWNER_ID = exports.GET_TOKEN_BY_ID = exports.GET_LATEST_LIST = exports.FETCH_MARKETPLACE = void 0;
exports.FETCH_MARKETPLACE = "\n  query getMyListed($limit: Int!, $offset: Int!) {\n    list(\n      where: { currentOfferId: { _is_null: true } }\n      order_by: [{ createdAt: desc }, { price: asc }]\n      limit: $limit\n      offset: $offset\n    ) {\n      id\n      price\n      ownerId\n      storeId\n      createdAt\n      groupId\n      tokenId\n      splits {\n        account\n        percent\n        id\n      }\n      token {\n        thingId\n      }\n    }\n  }\n";
exports.GET_LATEST_LIST = "\n  query getListedItemsTree($groupId: String!) {\n    list(where: { groupId: { _eq: $groupId } }) {\n      createdAt\n      price\n      tokenKey\n      acceptedOfferId\n      removedAt\n      ownerId\n      token {\n        id\n        thingId\n        minter\n        ownerId\n        royaltyPercent\n        royaltys {\n          account\n          percent\n        }\n      }\n      splits {\n        account\n        percent\n      }\n      store {\n        id\n        name\n        owner\n        createdAt\n        things(limit: 5) {\n          id\n        }\n      }\n    }\n  }\n";
exports.GET_TOKEN_BY_ID = "\n  query getToken($tokenId: String!) {\n    token(where: {id: {_eq: $tokenId}}) {\n      id\n      ownerId\n      storeId\n      tokenId\n      thingId\n    }\n  }\n";
exports.GET_TOKENS_BY_OWNER_ID = "\n  query getToken($ownerId: String!) {\n    token(where: {ownerId: {_eq: $ownerId}}) {\n      id\n      ownerId\n      storeId\n      tokenId\n    }\n  }\n";
//# sourceMappingURL=queries.js.map