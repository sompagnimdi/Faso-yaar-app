const RESOURCE_PATH = '/items'

const viewController = {
  index (req, res, next) {
    res.render('items/Index', res.locals.data)
  },
  newView (req, res, next) {
    res.render('items/New')
  },
  edit (req, res, next) {
    res.render('items/Edit', res.locals.data)
  },
  show (req, res, next) {
    res.render('items/Show', res.locals.data)
  },
  redirectHome (req, res, next) {
    res.redirect(RESOURCE_PATH)
  },
  redirectShow (req, res, next) {
    const itemId = req.params.id || res.locals.data.item._id
    res.redirect(`${RESOURCE_PATH}/${itemId}`)
  }

}

module.exports = viewController

