require "graphql/rake_task"

GraphQL::RakeTask.new(
  schema_name: "AamSchema",
  directory: "../client/src/graphql",
  dependencies: [:environment]
)
