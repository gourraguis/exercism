/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export const cookingStatus = (timer) => {
    if (timer == null) {
        return 'You forgot to set the timer.'
    }

    if (timer == 0) {
        return 'Lasagna is done.'
    }

    return 'Not done, please wait.'
}

export const preparationTime = (layers, timePerLayer = 2) => {
    return layers.length * timePerLayer
}

export const quantities = (mats) => {
    let [noodlesCount, sauceCount] = [0, 0]

    mats.forEach(mat => {
        if (mat === 'sauce') {
            sauceCount += 1
        }

        if (mat === 'noodles') {
            noodlesCount += 1
        }
    })

    return {
        noodles: noodlesCount * 50,
        sauce: sauceCount * .2
    }
}

export const addSecretIngredient = (recipeA, recipeB) => {
    recipeB.push(recipeA[recipeA.length - 1])
}

export const scaleRecipe = (recipe, portions) => {
    const res = {}

    for (let mat in recipe) {
        res[mat] = recipe[mat] * portions / 2
    }

    return res
}