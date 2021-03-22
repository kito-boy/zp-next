import * as styles from '../styles/filters-panel.module.css'

export default function FiltersPanel(props) {
  return (
    <div className={styles['filters-panel']}>
      <div>
        <input
          className={styles.input}
          type='text'
          value={props.nameFilterValue}
          onInput={props.setNameFilter}
          placeholder='Filter by company name'
        />
        <button
          className={`${styles.filter} ${styles['filter--clear']}`}
          onClick={props.clearNameFilter}
        >
          Clear
        </button>
      </div>

      <button
        onClick={props.setDateFilter}
        className={`${styles.filter} ${
          props.isDateFilterActive ? styles['filter--active'] : ''
        }`}
      >
        <span>Posted in the last 7 days</span>
      </button>
    </div>
  )
}
