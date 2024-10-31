export const removeFields = <
  T extends Record<string, unknown>,
  K extends keyof T,
>(
  obj: T,
  fields: K[],
): Omit<T, K> => {
  const newObj = structuredClone(obj)

  fields.forEach((field) => {
    if (Object.prototype.hasOwnProperty.call(newObj, field)) {
      delete newObj[field]
    }
  })

  return newObj
}
