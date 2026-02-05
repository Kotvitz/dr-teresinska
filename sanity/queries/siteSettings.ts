export const siteSettingsQuery = `
  *[_type == "siteSettings"][0]{
    clinicName,
    addressLine,
    addressCity,
    nip,
    phone,
    email,
    openingHours
  }
`;
