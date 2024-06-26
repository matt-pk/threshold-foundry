/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function ()
{
  return loadTemplates([
    // Actor partials.
    'systems/threshold/templates/actor/parts/actor-features.hbs',
    'systems/threshold/templates/actor/parts/actor-items.hbs',
    'systems/threshold/templates/actor/parts/actor-spells.hbs',
    'systems/threshold/templates/actor/parts/actor-effects.hbs',
    'systems/threshold/templates/actor/parts/ability-selector.hbs',
    // Item partials
    'systems/threshold/templates/item/parts/item-effects.hbs',
  ]);
};
