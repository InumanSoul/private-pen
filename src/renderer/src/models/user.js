export class User {
  id
  name
  created_at
  updated_at

  constructor(id, name, created_at, updated_at) {
    this.id = id == null ? 0 : id
    this.name = name == null ? '' : name
    this.created_at = created_at == null ? '' : created_at
    this.updated_at = updated_at == null ? '' : updated_at
  }
}
