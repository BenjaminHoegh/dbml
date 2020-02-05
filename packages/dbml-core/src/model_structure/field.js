import Element from './element';

class Field extends Element {
  constructor ({ name, type, unique, pk, token, not_null, note, dbdefault,
    increment, table = {} } = {}) {
    super(token);
    if (!name) { this.error('Field must have a name'); }
    if (!type) { this.error('Field must have a type'); }
    this.name = name;
    // type : { type_name, value }
    this.type = type;
    this.unique = unique;
    this.pk = pk;
    this.not_null = not_null;
    this.note = note;
    this.dbdefault = dbdefault;
    this.increment = increment;
    this.endpoints = [];
    this.table = table;
    this.dbState = this.table.dbState;
    this.generateId();
  }

  generateId () {
    this.id = this.dbState.generateId('fieldId');
  }

  pushEndpoint (endpoint) {
    this.endpoints.push(endpoint);
  }

  export () {
    return {
      ...this.shallowExport(),
    };
  }

  exportParentIds () {
    return {
      tableId: this.table.id,
      enumId: this._enum ? this._enum.id : null,
    };
  }

  exportChildIds () {
    return {
      endpointIds: this.endpoints.map(e => e.id),
    };
  }

  shallowExport () {
    return {
      name: this.name,
      type: this.type,
      unique: this.unique,
      pk: this.pk,
      not_null: this.not_null,
      note: this.note,
      dbdefault: this.dbdefault,
      increment: this.increment,
    };
  }

  normalize (model) {
    model.fields = {
      ...model.fields,
      [this.id]: {
        id: this.id,
        ...this.shallowExport(),
        ...this.exportChildIds(),
        ...this.exportParentIds(),
      },
    };
  }
}

export default Field;
