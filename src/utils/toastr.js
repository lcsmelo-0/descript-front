import React from 'react'

import { toast } from 'react-toastify'

const genereateId = (type, text) => {
  return btoa(`${type}/${text}`)
}

const parse = text => {
  const title = text.length > 1 ? text[0] : undefined
  const content = text[1] || text[0]

  return {
    title,
    content,
  }
}

const error = (...text) => {
  const { title = 'Erro.', content } = parse(text)
  const toastId = genereateId('E', content)

  toast.error(
    <>
      <strong>{title}</strong>
      <br />
      {content}
    </>,
    {
      toastId,
    },
  )
}

const success = (...text) => {
  const { title = 'Sucesso!', content } = parse(text)
  const toastId = genereateId('S', content)

  toast.success(
    <>
      <strong>{title}</strong>
      <br />
      {content}
    </>,
    {
      toastId,
    },
  )
}

const warn = (...text) => {
  const { title = 'Ops!', content } = parse(text)
  const toastId = genereateId('W', content)

  toast.warn(
    <>
      <strong>{title}</strong>
      <br />
      {content}
    </>,
    {
      toastId,
    },
  )
}

const notification = (text, options) => {
  const toastId = genereateId('N', text)

  toast.info(
    <>
      <strong>{text}</strong>
    </>,
    {
      toastId,
      ...options,
    },
  )
}

export default {
  error,
  success,
  warn,
  notification,
}
