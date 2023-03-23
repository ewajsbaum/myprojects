(function () {
    'use strict';

    let recipeArray = [];
    let currentRecipeShowing;
    const recipeCard = $('#recipeCard');
    const recipeForm = $('#recipeForm');
    const nameInput = $('#nameInput');
    const ingInput = $('#ingInput');
    const dropdown = $('#dropDown');
    recipeCard.hide();
    recipeForm.hide();

    async function loadRecipeOptions() {
        try {
            const response = await fetch(`/recipes`);
            if (!response.ok) {
                throw new Error(response.text());
            }
            const recipeList = await response.json();

            clearCurrentData();

            recipeList.forEach(item => {
                const newOption = {
                    id: item.id,
                    name: item.name
                };
                recipeArray.push(newOption);
                $(`<option value="${newOption.id}">${newOption.name}</option>`).appendTo(dropdown);
            });

        } catch (e) {
            console.error(e);
        }
    }

    $('#dropDown').change(async () => {
        const recipeId = $("#dropDown option:selected").val();
        showRecipe(recipeId);
    });

    $('#add').click(() => {
        showRecipeForm();
    });

    $('#delete').click(async () => {
        try {
            const response = await fetch(`/recipes/${currentRecipeShowing.id}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error(response.text());
            }
            loadRecipeOptions();
        } catch (e) {
            console.error(e);
        }
    });

    $('#edit').click(() => {
        showRecipeForm(currentRecipeShowing);
    });

    function showRecipeForm(recipe) {
        if (recipe) {
            nameInput.val(recipe.name);
            ingInput.val(recipe.ing);
            recipeForm.data('recipe', recipe);
        }
        recipeForm.show();
    }

    recipeForm.submit(async (e) => {
        e.preventDefault();

        const newRecipe = {
            name: nameInput.val(),
            ing: ingInput.val()
        };

        const existingRecipe = recipeForm.data('recipe');
        const url = existingRecipe ? `/recipes/${existingRecipe.id}` : '/recipes';
        const method = existingRecipe ? 'PUT' : 'POST';


        try {
            const response = await fetch(url, {
                method,
                body: JSON.stringify(newRecipe),
                headers: {
                    'content-type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(response.text());
            }
            recipeForm.trigger('reset').hide();
        } catch (e) {
            console.error(e);
        }

        loadRecipeOptions();
    });

    async function showRecipe(id) {
        try {
            let response = await fetch(`recipes/${id}`);
            if (!response.ok) {
                throw new Error(response.text());
            }
            currentRecipeShowing = await response.json();

            recipeCard.show()
                .html(`<h1>${currentRecipeShowing.name}</h1>
            <h3>You will need: ${currentRecipeShowing.ing}</h3>`);
        } catch (e) {
            console.error(e);
        }
    }

    function clearCurrentData() {
        recipeArray = [];
        dropdown.empty();
        dropdown.append('<option value="">--Please choose an option--</option>');
    }

    loadRecipeOptions();

})();