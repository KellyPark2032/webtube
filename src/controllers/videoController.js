// multiple export
export const trending = (req, res) => {
  const videos = [
    {
      title: 'First Video',
      rating: 5,
      comments: 2,
      createdAt: '2 minutes age',
      id: 1,
    },
    {
      title: 'Second Video',
      rating: 5,
      comments: 2,
      createdAt: '2 minutes age',
      id: 1,
    },
    {
      title: 'Third Video',
      rating: 5,
      comments: 2,
      createdAt: '2 minutes age',
      id: 1,
    },
  ]
  // use variables
  return res.render('home', { pageTitle: 'Home', videos })
}
export const search = (req, res) => res.send('Search')

// request object has informations about request
export const see = (req, res) => res.render('watch', { pageTitle: 'Watch' })
export const edit = (req, res) => res.render('Edit', { pageTitle: 'Edit' })
export const deleteVideo = (req, res) => {
  return res.send('Delete Video')
}
export const upload = (req, res) => res.send('Upload')
