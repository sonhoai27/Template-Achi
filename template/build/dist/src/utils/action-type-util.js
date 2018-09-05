/**
 * Appends REQUEST async action type
 */
export var REQUEST = function (actionType) { return actionType + "_PENDING"; };
/**
 * Appends SUCCESS async action type
 */
export var SUCCESS = function (actionType) { return actionType + "_FULFILLED"; };
/**
 * Appends FAILURE async action type
 */
export var FAILURE = function (actionType) { return actionType + "_REJECTED"; };
//# sourceMappingURL=action-type-util.js.map