"use strict";
/*
1) Створити клас Рецепт:

    властивості:
        назва
список інгрідієнтів
опис приготування
час приготування
методи:
    конструктор, який приймає 4 параметри і задає відповідні властивості
чи валідний - метод, який повертає тру, якщо всі властивості валідні,
 інакше фолс


2) Створити клас Книга рецептів:

    Властивості:
        конструктор не потрібен;
масив рецептів, який при створенні пустий.
    Методи:
додати рецепт - метод повинен приймати екземпляр класу Рецепт,
та додавати до масиву рецептів, якщо він валідний.
знайти рецепти за часом - метод повинен приймати число час
приготування і повертати список усіх рецептів, час приготування яких
 не перевищує вказаний
знайти рецепти за інгрідієнтами - метод повинен приймати список
 інгрідієнтів для пошуку і повертати список усіх рецептів, список
 інгрідієнтів яких містить усі, які вказали


3) Далі програма повинна створити

декілька екземплярів класу Рецепт (обов'язково мають бути щонайменше
три валідні: з часом приготування 30хв, 60хв, 120хв. Також щонайменше
три валідні: не містить ні картоплі, ні моркви; містить картоплю,
 не містить моркву; містить і картоплю, і моркву. І ще один невалідний
  рецепт)
екземпляр класу Книга рецептів
додати усі створені рецепти в книгу
викликати метод знайти рецепти за часом з параметром 60. за отриманим
 списком згенерувати повідомлення, яке містить назви рецептів,
 і вивести його в консолі
викликати метод знайти рецепти за інгрідієнтами з параметром
['картопля', 'морква']. за отриманим списком згенерувати повідомлення,
 яке містить назви рецептів, і вивести його в консолі
 */
class Recipe {
    constructor(name,listOfIngredients,descriptionOfPreparation, cookingTime){
        this.name = name
        this.listOfIngredients = listOfIngredients
        this.descriptionOfPreparation = descriptionOfPreparation
        this.cookingTime = parseFloat(cookingTime)
    }
    isValidProperties() {
        if (this.name?.trim() && this.listOfIngredients?.length  &&
            this.descriptionOfPreparation?.trim() && this.cookingTime > 0) {
            return true
        }
        return false
    }
}

class RecipeBook {
    arrayOfRecipes = []

    addingRecipes(recipe) {
        const isValidProperties = recipe.isValidProperties()
        if (isValidProperties) {
            this.arrayOfRecipes.push(recipe)
        }
        return this.arrayOfRecipes
    }

    isValidTime(cookingTimeLimit) {
        this.arrayRecipeWhichTimeLimit = []
        for (let i = 0; i < this.arrayOfRecipes.length; i++) {
            const timeCook = parseFloat(this.arrayOfRecipes[i].cookingTime)
            if (timeCook > 0 &&
                timeCook <= parseFloat(cookingTimeLimit)) {
                this.arrayRecipeWhichTimeLimit.push(this.arrayOfRecipes[i])
            }
        }
    }

    isNecessaryIngredients(necessaryIngredients) {
        this.arrayRecipeNecessaryIngredients = this.arrayOfRecipes.filter((recipe) => {
            return necessaryIngredients.every(ingredient => recipe.listOfIngredients.includes(ingredient))
        })
    }
}


const recipe1 = new Recipe("Lorem1",["meat","cheese","томати"],
    "to mixe,to bake",60)
const recipe2 = new Recipe("Lorem2",["meat","морква","томати"],
    "to mixe,to bake",120)
const recipe3 = new Recipe("Lorem3",["картопля","salt","onions","томати"],
    "to mixe,to bake","30minutes")
const recipe4 = new Recipe("Lorem4",["картопля","морква","томати"],
    "to mixe,to bake",50)
const recipe5 = new Recipe("Lorem5",["cucumber","onions","томати"],
    "to mixe,to add butter",55)
const recipe6 = new Recipe("Lorem6",["cucumber","onions","томати","cheese"],
    "to mixe,to add salt",25)
const recipe7 = new Recipe("Lorem7",["cucumber","onions","томати","cheese"],
    "to mixe,to add salt",0)

const recipeBook = new RecipeBook()
recipeBook.addingRecipes(recipe1)
recipeBook.addingRecipes(recipe2)
recipeBook.addingRecipes(recipe3)
recipeBook.addingRecipes(recipe4)
recipeBook.addingRecipes(recipe5)
recipeBook.addingRecipes(recipe6)
recipeBook.addingRecipes(recipe7)
console.log(recipeBook.arrayOfRecipes)

recipeBook.isValidTime("60minutes")
const arrayRecipeWhichTimesLimit = recipeBook.arrayRecipeWhichTimeLimit
let listName = ""
for (let c = 0; c < arrayRecipeWhichTimesLimit.length ; c++) {
    listName = listName + `${arrayRecipeWhichTimesLimit[c].name} : cooking time : ${arrayRecipeWhichTimesLimit[c].cookingTime}\n`
}
console.log(`The name recipes which time limit : 60 \n ${listName}`)

recipeBook.isNecessaryIngredients(["картопля","морква"])
const arrayRecipesNecessaryIngredients = recipeBook.arrayRecipeNecessaryIngredients
let listNameNecessaryIngredients = ""
for (let s = 0; s < arrayRecipesNecessaryIngredients.length ; s++) {
    listNameNecessaryIngredients = listNameNecessaryIngredients + `${arrayRecipesNecessaryIngredients[s].name}\n : list of ingredients : ${arrayRecipesNecessaryIngredients[s].listOfIngredients}\n`
}
console.log(`The name recipes which include necessary ingredients : картопля,морква\n ${listNameNecessaryIngredients}`)
