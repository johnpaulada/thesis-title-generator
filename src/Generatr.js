// @flow

// TODO: Try Flow

const Generatr = (grammar /*: object*/) /*: object*/ => ({
    generate: (key /*: string*/) /*: string*/  => {
        return resolve(key, grammar)
    }
})

function resolve(key, grammar) {
    const clause = grammar[key]
    const typeOfClause = typeof clause
    const clauseIsString = typeOfClause === "string"
    const clauseIsArray = Array.isArray(clause)

    if (clauseIsArray) {
        const selected = pluck(clause)

        return resolveString(selected, grammar)
    } else if (clauseIsString) {
        return resolveString(clause, grammar)
    }
}

function resolveString(clause, grammar) {
    const templates = findTemplates(clause)
    const noTemplates = templates.length === 0

    if (noTemplates) return clause

    const resolvedTemplates = templates.map(resolveTemplates(grammar))

    const resolved = templates.reduce((currentClause, template, index) => {
     
        // TODO: How to replaceOne
        return replaceOne(currentClause, template, resolvedTemplates[index])
    }, clause)

    return resolved 
}

function findTemplates(clause) {
    const matches = clause.match(/\{\{\s*\w+\s*\}\}/g)

    return matches || []
}

function replaceOne(target, old, replacement) {
    const oldLocation = target.indexOf(old)

    return target.substring(0, oldLocation) + replacement + target.substring(oldLocation + old.length)
}

function resolveTemplates(grammar) {
    return template => {
        const key = template.replace("{{", '').replace("}}", '').trim()

        return resolve(key, grammar)
    }
}

function pluck(list) {
    const selectedIndex = getRandomIntInclusive(0, list.length-1)
    const selectedItem = list[selectedIndex]
    
    return selectedItem
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default Generatr