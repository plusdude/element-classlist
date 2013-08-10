/**
 * Implementation of classList attribute (DOMTokenList interface)
 * http://www.w3.org/TR/dom/#domtokenlist
 *
 * Relies on array generics
 * https://github.com/plusdude/array-generics
 *
 * Copyright (c) 2013 Alex K @plusdude
 * http://opensource.org/licenses/MIT
 */
(function (global, undefined) {
    /*jshint maxlen:95, nomen:false, validthis:true*/
    "use strict";

    /**
     * Local reference to Array constructor.
     * This may speed up access and slightly reduce file size of minified version.
     */
    var Array = global.Array;

    /**
     * @constructor
     */
    function DOMTokenList(element) {
        var tokens;

        if (!(this instanceof DOMTokenList)) {
            return new DOMTokenList(this);
        }
        // an underlying string
        tokens = element.className;

        // convert an underlying string to array
        tokens = tokens.match(/\S+/g) || [];

        // assign each token to this object
        Array.forEach(tokens, assign, this);

        // a tokens length
        this.length = tokens.length;

        // a reference to element
        this.element = element;

        // prevent strict warning
        return this;
    }

    /**
     * Assigns token to DOMTokenList object.
     * @private
     */
    function assign(token, index) {
        this[index] = token;
    }

    /**
     * Sets element className.
     * @private
     */
    function refresh(instance) {
        instance.element.className = Array.join(instance, " ");
    }

    /**
     * Throws if token is an empty string or contains spaces.
     * @private
     */
    function validate(token) {
        token = String(token);

        if ("" === token) {
            throw new Error("An invalid or illegal string was specified");
        }
        if (/\s/.test(token)) {
            throw new Error("String contains an invalid character");
        }
        return token;
    }

    /**
     * Throws if parameters length is equal to 0.
     * @private
     */
    function require(parameters, name) {
        if (!parameters.length) {
            throw new Error("Not enough arguments to DOMTokenList." + name);
        }
    }

    /**
     * Returns the token by index.
     * @see http://www.w3.org/TR/dom/#dom-domtokenlist-item
     */
    function item(index) {
        // make sure at least one argument specified
        require(arguments, "item");

        // a token by index or null, if index does not exist
        return index in this ? this[index] : null;
    }

    /**
     * Returns true if the token is present; false otherwise.
     * @see https://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html#dom-domtokenlist-contains
     */
    function contains(token) {
        var index;

        // make sure at least one argument specified
        require(arguments, "contains");

        // make sure token is not an empty string and does not contain spaces
        token = validate(token);

        // an index of token in list
        index = Array.indexOf(this, token);

        // true if index is greater than -1
        return -1 < index;
    }

    /**
     * Adds all arguments passed, except those already present.
     * @see http://www.w3.org/TR/dom/#dom-domtokenlist-add
     */
    function add() {
        // make sure at least one argument specified
        require(arguments, "add");

        // call the addToken() for each argument
        Array.forEach(arguments, addToken, this);

        // refresh className
        refresh(this);
    }

    /**
     * Adds token to DOMTokenList if it is not present.
     * @private
     */
    function addToken(token) {
        var index;

        // make sure token is not an empty string and does not contain spaces
        token = validate(token);

        // an index of token in list
        index = Array.indexOf(this, token);

        // a token is not present
        if (0 > index) {

            // add token
            Array.push(this, token);
        }
    }

    /**
     * Removes arguments passed, if they are present.
     * @see http://www.w3.org/TR/dom/#dom-domtokenlist-remove
     */
    function remove() {
        // make sure at least one argument specified
        require(arguments, "remove");

        // call the removeToken() for each argument
        Array.forEach(arguments, removeToken, this);

        // refresh className
        refresh(this);
    }

    /**
     * Removes token from DOMTokenList if it is present.
     * @private
     */
    function removeToken(token) {
        var index;

        // make sure token is not an empty string and does not contain spaces
        token = validate(token);

        // an index of token in list
        index = Array.indexOf(this, token);

        // a token is present
        if (-1 < index) {

            // remove token
            Array.splice(this, index, 1);
        }
    }

    /**
     * Toggles token, removing it if it's present and adding it if it's not.
     * @see http://www.w3.org/TR/dom/#dom-domtokenlist-toggle
     */
    function toggle(token, force) {
        var index;

        // make sure at least one argument specified
        require(arguments, "toggle");

        // make sure token is not an empty string and does not contain spaces
        token = validate(token);

        // convert force to boolean, if is set
        if (undefined !== force) {
            force = Boolean(force);
        }
        // an index of token in list
        index = Array.indexOf(this, token);

        // a token is present
        if (-1 < index) {

            // not forced to add
            if (true !== force) {

                // remove token
                Array.splice(this, index, 1);

                // a return value, if force is undefined
                force = false;
            }
        } else {
            // not forced to remove
            if (false !== force) {

                // add token
                Array.push(this, token);

                // a return value, if force is undefined
                force = true;
            }
        }
        // refresh className
        refresh(this);

        // confirm action
        return force;
    }

    /**
     * DOMTokenList objects must stringify to the underlying string.
     * @see http://www.w3.org/TR/dom/#dom-domtokenlist-stringifier
     */
    function toString() {
        return Array.join(this, " ");
    }

    /**
     * Test native implementation.
     * Note: It is possible to test many aspects, such as multiple arguments in add/remove,
     * second argument in toggle, etc.. but most browsers that already implements classList
     * does not allow to alter it.
     */
    var document = global.document;
    var HTMLElement = global.HTMLElement || global.Element;

    if (!document || document.documentElement.classList || !HTMLElement) {
        return;
    }

    /**
     * Define methods.
     */
    DOMTokenList.prototype = {
        "constructor": DOMTokenList,
        "item": item,
        "contains": contains,
        "add": add,
        "remove": remove,
        "toggle": toggle,
        "toString": toString
    };

    /**
     * Define getter.
     */
    try {
        Object.defineProperty(HTMLElement.prototype, "classList", {
            get: DOMTokenList
        });
    } catch (e) {
        HTMLElement.prototype.__defineGetter__("classList", DOMTokenList);
    }

}(this));
