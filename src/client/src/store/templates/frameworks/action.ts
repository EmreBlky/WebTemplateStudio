import { IOption } from "../../../types/option";
import { TEMPLATES_TYPEKEYS } from "../templateTypeKeys";
import {
  IBackendFrameworksSuccessActionTypeAction,
  IFrontendFrameworksActionTypeAction,
  IUpdateFrameworkActionTypeAction,
} from "./model";

export const updateFrameworksAction = (frameworks: IOption[]): IUpdateFrameworkActionTypeAction => ({
  type: TEMPLATES_TYPEKEYS.UPDATE_FRAMEWORK,
  payload: frameworks,
});

export const setFrontendFrameworksAction = (frameworks: IOption[]): IFrontendFrameworksActionTypeAction => ({
  type: TEMPLATES_TYPEKEYS.SET_FRONTEND_FRAMEWORKS,
  payload: frameworks,
});

export const setBackendFrameworksAction = (frameworks: IOption[]): IBackendFrameworksSuccessActionTypeAction => ({
  type: TEMPLATES_TYPEKEYS.SET_BACKEND_FRAMEWORKS,
  payload: frameworks,
});
