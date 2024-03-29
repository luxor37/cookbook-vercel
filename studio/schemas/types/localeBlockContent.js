const supportedLanguages = [
  { id: "en", title: "English", isDefault: true },
  { id: "fr", title: "French" },
  // Add as many languages as you need to support
]

export default {
  name: "localeBlockContent",
  type: "object",
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true },
    },
  ],
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: "blockContent",
    fieldset: lang.isDefault ? null : "translations",
  })),
}