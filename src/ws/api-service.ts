import { servicesGet, servicesPost, handleErrorResponse } from "./methods";
import { ApiPostData } from "./types";

const API_URL = process.env.REACT_APP_BASE_URL;

export const getParsed = async () => {
  try {
    const endpoint = `${API_URL}/parsed`;
    const response = await servicesGet(endpoint);

    if (response.ok) {
      return await response.json();
    }

    const errorResponse = await response.text();
    console.log("ERROR Parsed Service()", errorResponse);
    return handleErrorResponse(errorResponse);
  } catch (error) {
    console.log("CATCH Parsed Service()", error);
    return error;
  }
};

export const newParse = async (data: ApiPostData) => {
  try {
    const endpoint = `/parse`;

    const newObjectParse = {
      encodedString: data,
    };

    const params = {
      data: newObjectParse,
      route: endpoint,
      isLoginRequest: true,
    };

    const response = await servicesPost(params);

    if (response.ok) {
      return await response.json();
    }
    const errorResponse = await response.text();
    console.log("ERROR new parse()", errorResponse);
    return handleErrorResponse(errorResponse);
  } catch (error) {
    console.log("CATCH parse()", error);
    return error;
  }
};
