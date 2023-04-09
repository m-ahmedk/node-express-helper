const helpers = {};

helpers.isValidURL = function (text) {
    return text.startsWith("http");
};

helpers.generateRandomString = function () {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < n; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
};

helpers.isValidObjectId = function (id) {
    return mongoose.Types.ObjectId.isValid(id);
};

helpers.isNullOrUndefined = function (value) {
    if (value === undefined || value === null || value === "") return true;
};

helpers.trim_fields = async function (obj) {
    var list = Object.entries(obj);
    let array = new Array();

    for (let i = 0; i < list.length; i++) {
        list[i][1] = list[i][1].trim();
        array.push(list[i]);
    }

    return array;
}

helpers.convertToSlug = async function (text) {
    return text
        .toLowerCase()
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-");
}

helpers.calculateAge = async function (dateOfBirth) {
    const dob = new Date(dateOfBirth);
    const ageDiffMs = Date.now() - dob.getTime();
    const ageDate = new Date(ageDiffMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

helpers.validateEmail = async function (email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

helpers.formatDate = async function (date) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = ("0" + (d.getMonth() + 1)).slice(-2);
    const day = ("0" + d.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
}

helpers.paginateResults = async (page, pageSize, results) => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const paginatedResults = results.slice(startIndex, endIndex);
    return paginatedResults;
}



module.exports = helpers;