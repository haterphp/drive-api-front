export function makeClassname (...classNames: (string | undefined | boolean)[]) {
     return classNames.filter(c => typeof c === 'string').join(' ')
}