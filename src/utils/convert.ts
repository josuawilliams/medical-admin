export function extractInitials(name?: string): string {
  const trimmedName = name?.trim()
  const nameParts = trimmedName?.split(' ')

  if (!nameParts || nameParts.length === 0) {
    return ''
  } else if (nameParts.length === 1) {
    return nameParts[0].charAt(0).toUpperCase()
  } else {
    const initials = nameParts.map((part) => part.charAt(0))
    return initials.slice(0, 2).join('').toUpperCase()
  }
}
