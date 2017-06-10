// ------------------
// FOR A SINGLE PIZZA
// ------------------
// definition of a "minimal" Pizza as it is on the backend
export interface IPizzaBackendWithoutDetails {
  readonly id: string;
  readonly name: string;
}

// definition of a "detailed" Pizza as it is on the backend
// without foreign keys
export interface IPizzaBackendWithDetails extends IPizzaBackendWithoutDetails {
  readonly prices: number[];
}

// definition of a "detailed" Pizza as it is on the backend with foreign keys
export interface IPizzaBackendWithDetailsAndFk extends IPizzaBackendWithDetails {
  // here ingredientsIds refers to ingredients stored into another reducer
  readonly ingredientsIds: string[];
}

// definition of everything related to a Pizza **and** UI
interface IPizzaUi {
  readonly isFetchingDetails: boolean;
  readonly isFetchingDetailsError: string;
  readonly isRemoving: boolean;
  readonly isRemovingError: string;
  readonly isEditingName: boolean;
  readonly isEditingNameError: string;
}

// definition of everything related to a minimal Pizza **and** UI
// tslint:disable-next-line:no-empty-interface
export interface IPizzaBackendWithoutDetailsUi extends IPizzaBackendWithoutDetails, IPizzaUi {}

// definition of everything related to a detailed Pizza **and** UI
// tslint:disable-next-line:no-empty-interface
export interface IPizzaBackendWithDetailsAndFkUi extends IPizzaBackendWithDetailsAndFk, IPizzaUi {}

// ----------------------------------------------------------------------------

// -------------------
// FOR MULTIPLE PIZZAS
// -------------------
// definition of the UI attributes you want to save for all the pizzas
interface IPizzasUi {
  readonly isAdding: boolean;
  readonly isAddingError: string;
}

// definition of the Pizzas with byId and allIds for state normalization
export interface IPizzasTable extends IPizzasUi {
  readonly byId: { [key: string]: IPizzaBackendWithDetailsAndFkUi };
  readonly allIds: string[];
}
