import './index.css'

const HistoryMaker = props => {
  const {details, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = details

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-cont">
      <p className="time">{timeAccessed}</p>

      <div className="history-details">
        <div className="site-visited">
          <img className="site-logo" src={logoUrl} alt="domain logo" />
          <div className="site-details">
            <p className="site-title">{title}</p>
            <p className="site-url">{domainUrl}</p>
          </div>
        </div>

        <img
          className="delete"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          data-testid="delete"
          onClick={onDelete}
        />
      </div>
    </li>
  )
}
export default HistoryMaker
