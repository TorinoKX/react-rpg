import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
    schemaFile: 'https://dotnet-rpg20221117202945.azurewebsites.net/swagger/v1/swagger.json',
    apiFile: './src/store/emptyApi.ts',
    apiImport: 'emptySplitApi',
    outputFile: './src/store/rpgApi.ts',
    exportName: 'rpgApi',
    hooks: true,
}

export default config