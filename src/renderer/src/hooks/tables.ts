export const tblNotes = {
  name: 'Notes',
  columns: {
    Id: { primaryKey: true, autoIncrement: true },
    Detail: { notNull: true, dataType: 'string' },
    CreatedAt: { notNull: true, dataType: 'date_time' },
    UpdatedAt: { notNull: true, dataType: 'date_time' }
  }
}

export const tblUser = {
  name: 'User',
  columns: {
    Id: { primaryKey: true, autoIncrement: true },
    Name: { notNull: true, dataType: 'string' },
    CreatedAt: { notNull: true, dataType: 'date_time' },
    UpdatedAt: { notNull: true, dataType: 'date_time' }
  }
}
