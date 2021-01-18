const clone = require('clone')
const config = require('./config')

const db = {}

const defaultData = {
  contacts: [
    {
      id: '242dfef8-529a-11eb-ae93-0242ac130002',
      name: 'Ryan Florence',
      email: 'ryan@reacttraining.com',
      avatarURL: config.origin + '/ryan.jpg'
    },
    {
      id: '299992c6-529a-11eb-ae93-0242ac130002',
      name: 'Michael Jackson',
      email: 'michael@reacttraining.com',
      avatarURL: config.origin + '/michael.jpg'
    },
    {
      id: '307f0b0c-529a-11eb-ae93-0242ac130002',
      name: 'Tyler McGinnis',
      email: 'tyler@reacttraining.com',
      avatarURL: config.origin + '/tyler.jpg'
    }
  ]
}

const get = (token) => {
  let data = db[token]

  if (data == null) {
    data = db[token] = clone(defaultData)
  }

  return data
}

const add = (token, contact) => {
  if (!contact.id) {
    contact.id = Math.random().toString(36).substr(-8)
  }

  get(token).contacts.push(contact)

  return contact
}

const remove = (token, id) => {
  const data = get(token)
  const contact = data.contacts.find(c => c.id === id)

  if (contact) {
    data.contacts = data.contacts.filter(c => c !== contact)
  }

  return { contact }
}

module.exports = {
  get,
  add,
  remove,
  defaultData
}
