export class Note {
  id
  title
  data
  created_at
  updated_at

  constructor(id, title, data, created_at, updated_at) {
    this.id = id == null ? 0 : id
    this.title = title == null ? '' : title
    this.data = data == null ? '' : data
    this.created_at = created_at == null ? '' : created_at
    this.updated_at = updated_at == null ? '' : updated_at
  }
}
