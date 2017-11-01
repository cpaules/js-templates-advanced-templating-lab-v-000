function init() {
  //put any page initialization/handlebars initialization here
  handlebarsSetup()
  initForm()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function HandlebarsSetup() {
	Handlebars.registerPartial("recipeDetailsPartial", document.getElementById("recipe-details-partial").innerHTML)
	Handlebars.registerPartial("recipeFormPartial", document.getElementById("recipe-form-partial").innerHTML)
	Handlebars.registerHelper("displayIngredient", function(ingredient) {
		return new Handlebars.SafeString("<li name='ingredientsList'>" + ingredient + "</li>")
	})
}