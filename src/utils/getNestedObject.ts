export const getNestedObject = (nestedObj: any, pathArr: any) => {
    return pathArr.reduce((obj: any, key: any) =>
        (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
}