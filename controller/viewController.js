const RESOURCE_PATH = '/Faso-yaars'

const viewController = {
  index (req, res, next) {
    res.render('faso-yaars/Index', res.locals.data)
  },
  newView (req, res, next) {
    res.render('faso-yaars/New')
  },
  edit (req, res, next) {
    res.render('faso-yaars/Edit', res.locals.data)
  },
  show (req, res, next) {
    res.render('faso-yaars/Show', res.locals.data)
  },
  redirectHome (req, res, next) {
    res.redirect(RESOURCE_PATH)
  },
  redirectShow (req, res, next) {
    const fasoyaarId = req.params.id || res.locals.data.faso-yaar._id
    res.redirect(`${RESOURCE_PATH}/${faso-yaarId}`)
  }

}

module.exports = viewController
