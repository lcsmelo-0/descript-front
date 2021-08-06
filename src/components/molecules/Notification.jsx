import NotificationAlert from 'react-notification-alert'

const Notification = ({ onClick = _ => _, place, ...props }) => {
  var color = Math.floor(Math.random() * 5 + 1)
  var type
  switch (color) {
    case 1:
      type = 'primary'
      break
    case 2:
      type = 'success'
      break
    case 3:
      type = 'danger'
      break
    case 4:
      type = 'warning'
      break
    case 5:
      type = 'info'
      break
    default:
      break
  }
  var options = {}
  options = {
    place: place,
    message: (
      <div>
        <div>
          Welcome to <b>Black Dashboard React</b> - a beautiful freebie for every web developer.
        </div>
      </div>
    ),
    type: type,
    icon: 'tim-icons icon-bell-55',
    autoDismiss: 7,
  }
  this.refs.notificationAlert.notificationAlert(options)
  return (
    <div className="react-notification-alert-container">
      <NotificationAlert ref="notificationAlert" />
    </div>
  )
}
export default Notification
