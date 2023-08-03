export default ({ env }) => ({
  "open-ai": {
    enabled: true,
    config: {
      API_TOKEN: env("OPENAI_API_KEY"),
    },
  },
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        article: {
          field: "slug",
          references: "title",
        },
      },
    },
  },
});
