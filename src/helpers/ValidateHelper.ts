export default abstract class ValidateHelper {
  public static validate(error: any): any[] {
    let errorsValidation: any[] = error.details.map(
      (e: any) => e.context.label
    );

    for (let i = errorsValidation.length - 1; i >= 0; i--) {
      if (errorsValidation.indexOf(errorsValidation[i]) !== i)
        errorsValidation.splice(i, 1);
    }

    return errorsValidation;
  }
}
