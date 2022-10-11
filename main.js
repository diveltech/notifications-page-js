import "./css/normalize.css";
import "./css/style.css";

const number_unread = document.getElementById('number-unread')
const checked_read = document.getElementById('checked-read')
const notifications_container = document.getElementById('notifications-container')

const getNumberUnread = () => {
  const list_items = Array.from(notifications_container.children).filter(item => item.classList.contains('notifications-item--unread'))
  number_unread.textContent = list_items.length
}

getNumberUnread()
const handleCheck = async () => {
  const list_items = Array.from(notifications_container.children)
  list_items.map(item => item.classList.remove('notifications-item--unread'))
  number_unread.textContent = '0'
}
checked_read.addEventListener('click', handleCheck)