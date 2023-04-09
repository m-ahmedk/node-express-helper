const helpers = {};

/**
 * Returns true if the text starts with "http", indicating it is a valid URL
 *
 * @param {string} text - The text to check
 * @returns {boolean} - True if the text starts with "http", false otherwise
 */
helpers.isValidURL = function (text) {
    return text.startsWith("http");
};


/**
 * Generates a random string of alphanumeric characters of length n
 *
 * @param {number} n - The length of the random string to generate
 * @returns {string} - The random string
 */
helpers.generateRandomString = function (n) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < n; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
};


/**
 * Returns true if the provided ID is a valid MongoDB ObjectID, false otherwise
 *
 * @param {string} id - The ID to check
 * @returns {boolean} - True if the ID is valid, false otherwise
 */
helpers.isValidObjectId = function (id) {
    return mongoose.Types.ObjectId.isValid(id);
};


/**
 * Returns true if the value is null, undefined, or an empty string, false otherwise
 *
 * @param {*} value - The value to check
 * @returns {boolean} - True if the value is null, undefined, or an empty string, false otherwise
 */
helpers.isNullOrUndefined = function (value) {
    if (value === undefined || value === null || value === "") return true;
    else return false;
};


/**
 * Trims all string values in an object
 *
 * @param {object} obj - The object whose string values to trim
 * @returns {Promise<array>} - A promise that returns an array of [key, value] pairs where the value is trimmed
 */
helpers.trim_fields = async function (obj) {
    var list = Object.entries(obj);
    let array = new Array();

    for (let i = 0; i < list.length; i++) {
        list[i][1] = list[i][1].trim();
        array.push(list[i]);
    }

    return array;
}


/**
 * Converts a string to a slug format, replacing non-alphanumeric characters with hyphens
 *
 * @param {string} text - The text to convert
 * @returns {Promise<string>} - A promise that returns a converted slug text
 */
helpers.convertToSlug = async function (text) {
    return text
        .toLowerCase()
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-");
}


/**
 * Calculates the age based on the provided date of birth
 *
 * @param {string} dateOfBirth - The date of birth in string format (e.g. "2000-01-01")
 * @returns {Promise<number>} - A promise that returns the calculated age
 */
helpers.calculateAge = async function (dateOfBirth) {
    const dob = new Date(dateOfBirth);
    const ageDiffMs = Date.now() - dob.getTime();
    const ageDate = new Date(ageDiffMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}


/**
 * Validates an email address.
 * @param {string} email - The email address to validate.
 * @returns {Promise<boolean>} - A promise that resolves to a boolean indicating whether the email address is valid or not.
 */
helpers.validateEmail = async function (email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}


/**
 * Formats a date in the format "YYYY-MM-DD".
 * @param {string|Date} date - The date to format.
 * @returns {Promise<string>} - A promise that resolves to a formatted date string.
 */
helpers.formatDate = async function (date) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = ("0" + (d.getMonth() + 1)).slice(-2);
    const day = ("0" + d.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
}


/**
 * Paginates an array of results.
 * @param {number} page - The page number to retrieve.
 * @param {number} pageSize - The number of items to include per page.
 * @param {Array} results - The array of results to paginate.
 * @returns {Promise<Array>} - A promise that resolves to an array of paginated results.
 */
helpers.paginateResults = async (page, pageSize, results) => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const paginatedResults = results.slice(startIndex, endIndex);
    return paginatedResults;
}


module.exports = helpers;