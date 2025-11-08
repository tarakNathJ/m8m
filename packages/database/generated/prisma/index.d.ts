
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model typeofstep
 * 
 */
export type typeofstep = $Result.DefaultSelection<Prisma.$typeofstepPayload>
/**
 * Model workflow
 * 
 */
export type workflow = $Result.DefaultSelection<Prisma.$workflowPayload>
/**
 * Model step
 * 
 */
export type step = $Result.DefaultSelection<Prisma.$stepPayload>
/**
 * Model stepes_run
 * 
 */
export type stepes_run = $Result.DefaultSelection<Prisma.$stepes_runPayload>
/**
 * Model out_box_step_run
 * 
 */
export type out_box_step_run = $Result.DefaultSelection<Prisma.$out_box_step_runPayload>
/**
 * Model working_step_validator
 * 
 */
export type working_step_validator = $Result.DefaultSelection<Prisma.$working_step_validatorPayload>
/**
 * Model reseve_email_validator
 * 
 */
export type reseve_email_validator = $Result.DefaultSelection<Prisma.$reseve_email_validatorPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const status: {
  ACTIVE: 'ACTIVE',
  DEACTIVE: 'DEACTIVE'
};

export type status = (typeof status)[keyof typeof status]


export const work_type: {
  NORMAL: 'NORMAL',
  AUTOMATIC: 'AUTOMATIC'
};

export type work_type = (typeof work_type)[keyof typeof work_type]


export const working_status: {
  CREATE: 'CREATE',
  PANDING: 'PANDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED'
};

export type working_status = (typeof working_status)[keyof typeof working_status]


export const step_validation_status: {
  SUCCCESS: 'SUCCCESS',
  PANDING: 'PANDING',
  NEXTSTAGE: 'NEXTSTAGE',
  DONE: 'DONE'
};

export type step_validation_status = (typeof step_validation_status)[keyof typeof step_validation_status]

}

export type status = $Enums.status

export const status: typeof $Enums.status

export type work_type = $Enums.work_type

export const work_type: typeof $Enums.work_type

export type working_status = $Enums.working_status

export const working_status: typeof $Enums.working_status

export type step_validation_status = $Enums.step_validation_status

export const step_validation_status: typeof $Enums.step_validation_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.typeofstep`: Exposes CRUD operations for the **typeofstep** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Typeofsteps
    * const typeofsteps = await prisma.typeofstep.findMany()
    * ```
    */
  get typeofstep(): Prisma.typeofstepDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workflow`: Exposes CRUD operations for the **workflow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workflows
    * const workflows = await prisma.workflow.findMany()
    * ```
    */
  get workflow(): Prisma.workflowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.step`: Exposes CRUD operations for the **step** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Steps
    * const steps = await prisma.step.findMany()
    * ```
    */
  get step(): Prisma.stepDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stepes_run`: Exposes CRUD operations for the **stepes_run** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stepes_runs
    * const stepes_runs = await prisma.stepes_run.findMany()
    * ```
    */
  get stepes_run(): Prisma.stepes_runDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.out_box_step_run`: Exposes CRUD operations for the **out_box_step_run** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Out_box_step_runs
    * const out_box_step_runs = await prisma.out_box_step_run.findMany()
    * ```
    */
  get out_box_step_run(): Prisma.out_box_step_runDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.working_step_validator`: Exposes CRUD operations for the **working_step_validator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Working_step_validators
    * const working_step_validators = await prisma.working_step_validator.findMany()
    * ```
    */
  get working_step_validator(): Prisma.working_step_validatorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reseve_email_validator`: Exposes CRUD operations for the **reseve_email_validator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reseve_email_validators
    * const reseve_email_validators = await prisma.reseve_email_validator.findMany()
    * ```
    */
  get reseve_email_validator(): Prisma.reseve_email_validatorDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    typeofstep: 'typeofstep',
    workflow: 'workflow',
    step: 'step',
    stepes_run: 'stepes_run',
    out_box_step_run: 'out_box_step_run',
    working_step_validator: 'working_step_validator',
    reseve_email_validator: 'reseve_email_validator'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "typeofstep" | "workflow" | "step" | "stepes_run" | "out_box_step_run" | "working_step_validator" | "reseve_email_validator"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      typeofstep: {
        payload: Prisma.$typeofstepPayload<ExtArgs>
        fields: Prisma.typeofstepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.typeofstepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$typeofstepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.typeofstepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$typeofstepPayload>
          }
          findFirst: {
            args: Prisma.typeofstepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$typeofstepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.typeofstepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$typeofstepPayload>
          }
          findMany: {
            args: Prisma.typeofstepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$typeofstepPayload>[]
          }
          create: {
            args: Prisma.typeofstepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$typeofstepPayload>
          }
          createMany: {
            args: Prisma.typeofstepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.typeofstepCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$typeofstepPayload>[]
          }
          delete: {
            args: Prisma.typeofstepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$typeofstepPayload>
          }
          update: {
            args: Prisma.typeofstepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$typeofstepPayload>
          }
          deleteMany: {
            args: Prisma.typeofstepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.typeofstepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.typeofstepUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$typeofstepPayload>[]
          }
          upsert: {
            args: Prisma.typeofstepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$typeofstepPayload>
          }
          aggregate: {
            args: Prisma.TypeofstepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTypeofstep>
          }
          groupBy: {
            args: Prisma.typeofstepGroupByArgs<ExtArgs>
            result: $Utils.Optional<TypeofstepGroupByOutputType>[]
          }
          count: {
            args: Prisma.typeofstepCountArgs<ExtArgs>
            result: $Utils.Optional<TypeofstepCountAggregateOutputType> | number
          }
        }
      }
      workflow: {
        payload: Prisma.$workflowPayload<ExtArgs>
        fields: Prisma.workflowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.workflowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workflowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.workflowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workflowPayload>
          }
          findFirst: {
            args: Prisma.workflowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workflowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.workflowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workflowPayload>
          }
          findMany: {
            args: Prisma.workflowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workflowPayload>[]
          }
          create: {
            args: Prisma.workflowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workflowPayload>
          }
          createMany: {
            args: Prisma.workflowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.workflowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workflowPayload>[]
          }
          delete: {
            args: Prisma.workflowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workflowPayload>
          }
          update: {
            args: Prisma.workflowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workflowPayload>
          }
          deleteMany: {
            args: Prisma.workflowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.workflowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.workflowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workflowPayload>[]
          }
          upsert: {
            args: Prisma.workflowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workflowPayload>
          }
          aggregate: {
            args: Prisma.WorkflowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkflow>
          }
          groupBy: {
            args: Prisma.workflowGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkflowGroupByOutputType>[]
          }
          count: {
            args: Prisma.workflowCountArgs<ExtArgs>
            result: $Utils.Optional<WorkflowCountAggregateOutputType> | number
          }
        }
      }
      step: {
        payload: Prisma.$stepPayload<ExtArgs>
        fields: Prisma.stepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stepPayload>
          }
          findFirst: {
            args: Prisma.stepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stepPayload>
          }
          findMany: {
            args: Prisma.stepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stepPayload>[]
          }
          create: {
            args: Prisma.stepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stepPayload>
          }
          createMany: {
            args: Prisma.stepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.stepCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stepPayload>[]
          }
          delete: {
            args: Prisma.stepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stepPayload>
          }
          update: {
            args: Prisma.stepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stepPayload>
          }
          deleteMany: {
            args: Prisma.stepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.stepUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stepPayload>[]
          }
          upsert: {
            args: Prisma.stepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stepPayload>
          }
          aggregate: {
            args: Prisma.StepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStep>
          }
          groupBy: {
            args: Prisma.stepGroupByArgs<ExtArgs>
            result: $Utils.Optional<StepGroupByOutputType>[]
          }
          count: {
            args: Prisma.stepCountArgs<ExtArgs>
            result: $Utils.Optional<StepCountAggregateOutputType> | number
          }
        }
      }
      stepes_run: {
        payload: Prisma.$stepes_runPayload<ExtArgs>
        fields: Prisma.stepes_runFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stepes_runFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stepes_runPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stepes_runFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stepes_runPayload>
          }
          findFirst: {
            args: Prisma.stepes_runFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stepes_runPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stepes_runFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stepes_runPayload>
          }
          findMany: {
            args: Prisma.stepes_runFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stepes_runPayload>[]
          }
          create: {
            args: Prisma.stepes_runCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stepes_runPayload>
          }
          createMany: {
            args: Prisma.stepes_runCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.stepes_runCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stepes_runPayload>[]
          }
          delete: {
            args: Prisma.stepes_runDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stepes_runPayload>
          }
          update: {
            args: Prisma.stepes_runUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stepes_runPayload>
          }
          deleteMany: {
            args: Prisma.stepes_runDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stepes_runUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.stepes_runUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stepes_runPayload>[]
          }
          upsert: {
            args: Prisma.stepes_runUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stepes_runPayload>
          }
          aggregate: {
            args: Prisma.Stepes_runAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStepes_run>
          }
          groupBy: {
            args: Prisma.stepes_runGroupByArgs<ExtArgs>
            result: $Utils.Optional<Stepes_runGroupByOutputType>[]
          }
          count: {
            args: Prisma.stepes_runCountArgs<ExtArgs>
            result: $Utils.Optional<Stepes_runCountAggregateOutputType> | number
          }
        }
      }
      out_box_step_run: {
        payload: Prisma.$out_box_step_runPayload<ExtArgs>
        fields: Prisma.out_box_step_runFieldRefs
        operations: {
          findUnique: {
            args: Prisma.out_box_step_runFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$out_box_step_runPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.out_box_step_runFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$out_box_step_runPayload>
          }
          findFirst: {
            args: Prisma.out_box_step_runFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$out_box_step_runPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.out_box_step_runFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$out_box_step_runPayload>
          }
          findMany: {
            args: Prisma.out_box_step_runFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$out_box_step_runPayload>[]
          }
          create: {
            args: Prisma.out_box_step_runCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$out_box_step_runPayload>
          }
          createMany: {
            args: Prisma.out_box_step_runCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.out_box_step_runCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$out_box_step_runPayload>[]
          }
          delete: {
            args: Prisma.out_box_step_runDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$out_box_step_runPayload>
          }
          update: {
            args: Prisma.out_box_step_runUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$out_box_step_runPayload>
          }
          deleteMany: {
            args: Prisma.out_box_step_runDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.out_box_step_runUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.out_box_step_runUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$out_box_step_runPayload>[]
          }
          upsert: {
            args: Prisma.out_box_step_runUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$out_box_step_runPayload>
          }
          aggregate: {
            args: Prisma.Out_box_step_runAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOut_box_step_run>
          }
          groupBy: {
            args: Prisma.out_box_step_runGroupByArgs<ExtArgs>
            result: $Utils.Optional<Out_box_step_runGroupByOutputType>[]
          }
          count: {
            args: Prisma.out_box_step_runCountArgs<ExtArgs>
            result: $Utils.Optional<Out_box_step_runCountAggregateOutputType> | number
          }
        }
      }
      working_step_validator: {
        payload: Prisma.$working_step_validatorPayload<ExtArgs>
        fields: Prisma.working_step_validatorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.working_step_validatorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$working_step_validatorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.working_step_validatorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$working_step_validatorPayload>
          }
          findFirst: {
            args: Prisma.working_step_validatorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$working_step_validatorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.working_step_validatorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$working_step_validatorPayload>
          }
          findMany: {
            args: Prisma.working_step_validatorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$working_step_validatorPayload>[]
          }
          create: {
            args: Prisma.working_step_validatorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$working_step_validatorPayload>
          }
          createMany: {
            args: Prisma.working_step_validatorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.working_step_validatorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$working_step_validatorPayload>[]
          }
          delete: {
            args: Prisma.working_step_validatorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$working_step_validatorPayload>
          }
          update: {
            args: Prisma.working_step_validatorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$working_step_validatorPayload>
          }
          deleteMany: {
            args: Prisma.working_step_validatorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.working_step_validatorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.working_step_validatorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$working_step_validatorPayload>[]
          }
          upsert: {
            args: Prisma.working_step_validatorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$working_step_validatorPayload>
          }
          aggregate: {
            args: Prisma.Working_step_validatorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorking_step_validator>
          }
          groupBy: {
            args: Prisma.working_step_validatorGroupByArgs<ExtArgs>
            result: $Utils.Optional<Working_step_validatorGroupByOutputType>[]
          }
          count: {
            args: Prisma.working_step_validatorCountArgs<ExtArgs>
            result: $Utils.Optional<Working_step_validatorCountAggregateOutputType> | number
          }
        }
      }
      reseve_email_validator: {
        payload: Prisma.$reseve_email_validatorPayload<ExtArgs>
        fields: Prisma.reseve_email_validatorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reseve_email_validatorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reseve_email_validatorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reseve_email_validatorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reseve_email_validatorPayload>
          }
          findFirst: {
            args: Prisma.reseve_email_validatorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reseve_email_validatorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reseve_email_validatorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reseve_email_validatorPayload>
          }
          findMany: {
            args: Prisma.reseve_email_validatorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reseve_email_validatorPayload>[]
          }
          create: {
            args: Prisma.reseve_email_validatorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reseve_email_validatorPayload>
          }
          createMany: {
            args: Prisma.reseve_email_validatorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reseve_email_validatorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reseve_email_validatorPayload>[]
          }
          delete: {
            args: Prisma.reseve_email_validatorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reseve_email_validatorPayload>
          }
          update: {
            args: Prisma.reseve_email_validatorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reseve_email_validatorPayload>
          }
          deleteMany: {
            args: Prisma.reseve_email_validatorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reseve_email_validatorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reseve_email_validatorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reseve_email_validatorPayload>[]
          }
          upsert: {
            args: Prisma.reseve_email_validatorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reseve_email_validatorPayload>
          }
          aggregate: {
            args: Prisma.Reseve_email_validatorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReseve_email_validator>
          }
          groupBy: {
            args: Prisma.reseve_email_validatorGroupByArgs<ExtArgs>
            result: $Utils.Optional<Reseve_email_validatorGroupByOutputType>[]
          }
          count: {
            args: Prisma.reseve_email_validatorCountArgs<ExtArgs>
            result: $Utils.Optional<Reseve_email_validatorCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    typeofstep?: typeofstepOmit
    workflow?: workflowOmit
    step?: stepOmit
    stepes_run?: stepes_runOmit
    out_box_step_run?: out_box_step_runOmit
    working_step_validator?: working_step_validatorOmit
    reseve_email_validator?: reseve_email_validatorOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    stepes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stepes?: boolean | UserCountOutputTypeCountStepesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStepesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stepWhereInput
  }


  /**
   * Count Type TypeofstepCountOutputType
   */

  export type TypeofstepCountOutputType = {
    stepes: number
  }

  export type TypeofstepCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stepes?: boolean | TypeofstepCountOutputTypeCountStepesArgs
  }

  // Custom InputTypes
  /**
   * TypeofstepCountOutputType without action
   */
  export type TypeofstepCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeofstepCountOutputType
     */
    select?: TypeofstepCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TypeofstepCountOutputType without action
   */
  export type TypeofstepCountOutputTypeCountStepesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stepWhereInput
  }


  /**
   * Count Type WorkflowCountOutputType
   */

  export type WorkflowCountOutputType = {
    stepes: number
    stepes_runs: number
  }

  export type WorkflowCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stepes?: boolean | WorkflowCountOutputTypeCountStepesArgs
    stepes_runs?: boolean | WorkflowCountOutputTypeCountStepes_runsArgs
  }

  // Custom InputTypes
  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowCountOutputType
     */
    select?: WorkflowCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeCountStepesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stepWhereInput
  }

  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeCountStepes_runsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stepes_runWhereInput
  }


  /**
   * Count Type StepCountOutputType
   */

  export type StepCountOutputType = {
    stepes_runs: number
  }

  export type StepCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stepes_runs?: boolean | StepCountOutputTypeCountStepes_runsArgs
  }

  // Custom InputTypes
  /**
   * StepCountOutputType without action
   */
  export type StepCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepCountOutputType
     */
    select?: StepCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StepCountOutputType without action
   */
  export type StepCountOutputTypeCountStepes_runsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stepes_runWhereInput
  }


  /**
   * Count Type Stepes_runCountOutputType
   */

  export type Stepes_runCountOutputType = {
    out_box_step_run: number
    working_step_validation: number
  }

  export type Stepes_runCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    out_box_step_run?: boolean | Stepes_runCountOutputTypeCountOut_box_step_runArgs
    working_step_validation?: boolean | Stepes_runCountOutputTypeCountWorking_step_validationArgs
  }

  // Custom InputTypes
  /**
   * Stepes_runCountOutputType without action
   */
  export type Stepes_runCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stepes_runCountOutputType
     */
    select?: Stepes_runCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Stepes_runCountOutputType without action
   */
  export type Stepes_runCountOutputTypeCountOut_box_step_runArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: out_box_step_runWhereInput
  }

  /**
   * Stepes_runCountOutputType without action
   */
  export type Stepes_runCountOutputTypeCountWorking_step_validationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: working_step_validatorWhereInput
  }


  /**
   * Count Type Working_step_validatorCountOutputType
   */

  export type Working_step_validatorCountOutputType = {
    reseve_email_validator: number
  }

  export type Working_step_validatorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reseve_email_validator?: boolean | Working_step_validatorCountOutputTypeCountReseve_email_validatorArgs
  }

  // Custom InputTypes
  /**
   * Working_step_validatorCountOutputType without action
   */
  export type Working_step_validatorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Working_step_validatorCountOutputType
     */
    select?: Working_step_validatorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Working_step_validatorCountOutputType without action
   */
  export type Working_step_validatorCountOutputTypeCountReseve_email_validatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reseve_email_validatorWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    is_active: boolean | null
    create_at: Date | null
    update_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    is_active: boolean | null
    create_at: Date | null
    update_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    is_active: number
    create_at: number
    update_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    is_active?: true
    create_at?: true
    update_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    is_active?: true
    create_at?: true
    update_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    is_active?: true
    create_at?: true
    update_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    is_active: boolean
    create_at: Date
    update_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    is_active?: boolean
    create_at?: boolean
    update_at?: boolean
    stepes?: boolean | user$stepesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    is_active?: boolean
    create_at?: boolean
    update_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    is_active?: boolean
    create_at?: boolean
    update_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    is_active?: boolean
    create_at?: boolean
    update_at?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "is_active" | "create_at" | "update_at", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stepes?: boolean | user$stepesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      stepes: Prisma.$stepPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      is_active: boolean
      create_at: Date
      update_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stepes<T extends user$stepesArgs<ExtArgs> = {}>(args?: Subset<T, user$stepesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly name: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly is_active: FieldRef<"user", 'Boolean'>
    readonly create_at: FieldRef<"user", 'DateTime'>
    readonly update_at: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.stepes
   */
  export type user$stepesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the step
     */
    select?: stepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the step
     */
    omit?: stepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepInclude<ExtArgs> | null
    where?: stepWhereInput
    orderBy?: stepOrderByWithRelationInput | stepOrderByWithRelationInput[]
    cursor?: stepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model typeofstep
   */

  export type AggregateTypeofstep = {
    _count: TypeofstepCountAggregateOutputType | null
    _avg: TypeofstepAvgAggregateOutputType | null
    _sum: TypeofstepSumAggregateOutputType | null
    _min: TypeofstepMinAggregateOutputType | null
    _max: TypeofstepMaxAggregateOutputType | null
  }

  export type TypeofstepAvgAggregateOutputType = {
    id: number | null
  }

  export type TypeofstepSumAggregateOutputType = {
    id: number | null
  }

  export type TypeofstepMinAggregateOutputType = {
    id: number | null
    name: string | null
    app: string | null
    work_type: $Enums.work_type | null
    image_url: string | null
    create_at: Date | null
    update_at: Date | null
  }

  export type TypeofstepMaxAggregateOutputType = {
    id: number | null
    name: string | null
    app: string | null
    work_type: $Enums.work_type | null
    image_url: string | null
    create_at: Date | null
    update_at: Date | null
  }

  export type TypeofstepCountAggregateOutputType = {
    id: number
    name: number
    app: number
    work_type: number
    meta_data: number
    image_url: number
    create_at: number
    update_at: number
    _all: number
  }


  export type TypeofstepAvgAggregateInputType = {
    id?: true
  }

  export type TypeofstepSumAggregateInputType = {
    id?: true
  }

  export type TypeofstepMinAggregateInputType = {
    id?: true
    name?: true
    app?: true
    work_type?: true
    image_url?: true
    create_at?: true
    update_at?: true
  }

  export type TypeofstepMaxAggregateInputType = {
    id?: true
    name?: true
    app?: true
    work_type?: true
    image_url?: true
    create_at?: true
    update_at?: true
  }

  export type TypeofstepCountAggregateInputType = {
    id?: true
    name?: true
    app?: true
    work_type?: true
    meta_data?: true
    image_url?: true
    create_at?: true
    update_at?: true
    _all?: true
  }

  export type TypeofstepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which typeofstep to aggregate.
     */
    where?: typeofstepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of typeofsteps to fetch.
     */
    orderBy?: typeofstepOrderByWithRelationInput | typeofstepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: typeofstepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` typeofsteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` typeofsteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned typeofsteps
    **/
    _count?: true | TypeofstepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TypeofstepAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TypeofstepSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TypeofstepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TypeofstepMaxAggregateInputType
  }

  export type GetTypeofstepAggregateType<T extends TypeofstepAggregateArgs> = {
        [P in keyof T & keyof AggregateTypeofstep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTypeofstep[P]>
      : GetScalarType<T[P], AggregateTypeofstep[P]>
  }




  export type typeofstepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: typeofstepWhereInput
    orderBy?: typeofstepOrderByWithAggregationInput | typeofstepOrderByWithAggregationInput[]
    by: TypeofstepScalarFieldEnum[] | TypeofstepScalarFieldEnum
    having?: typeofstepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TypeofstepCountAggregateInputType | true
    _avg?: TypeofstepAvgAggregateInputType
    _sum?: TypeofstepSumAggregateInputType
    _min?: TypeofstepMinAggregateInputType
    _max?: TypeofstepMaxAggregateInputType
  }

  export type TypeofstepGroupByOutputType = {
    id: number
    name: string
    app: string
    work_type: $Enums.work_type
    meta_data: JsonValue
    image_url: string
    create_at: Date
    update_at: Date
    _count: TypeofstepCountAggregateOutputType | null
    _avg: TypeofstepAvgAggregateOutputType | null
    _sum: TypeofstepSumAggregateOutputType | null
    _min: TypeofstepMinAggregateOutputType | null
    _max: TypeofstepMaxAggregateOutputType | null
  }

  type GetTypeofstepGroupByPayload<T extends typeofstepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TypeofstepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TypeofstepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TypeofstepGroupByOutputType[P]>
            : GetScalarType<T[P], TypeofstepGroupByOutputType[P]>
        }
      >
    >


  export type typeofstepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    app?: boolean
    work_type?: boolean
    meta_data?: boolean
    image_url?: boolean
    create_at?: boolean
    update_at?: boolean
    stepes?: boolean | typeofstep$stepesArgs<ExtArgs>
    _count?: boolean | TypeofstepCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["typeofstep"]>

  export type typeofstepSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    app?: boolean
    work_type?: boolean
    meta_data?: boolean
    image_url?: boolean
    create_at?: boolean
    update_at?: boolean
  }, ExtArgs["result"]["typeofstep"]>

  export type typeofstepSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    app?: boolean
    work_type?: boolean
    meta_data?: boolean
    image_url?: boolean
    create_at?: boolean
    update_at?: boolean
  }, ExtArgs["result"]["typeofstep"]>

  export type typeofstepSelectScalar = {
    id?: boolean
    name?: boolean
    app?: boolean
    work_type?: boolean
    meta_data?: boolean
    image_url?: boolean
    create_at?: boolean
    update_at?: boolean
  }

  export type typeofstepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "app" | "work_type" | "meta_data" | "image_url" | "create_at" | "update_at", ExtArgs["result"]["typeofstep"]>
  export type typeofstepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stepes?: boolean | typeofstep$stepesArgs<ExtArgs>
    _count?: boolean | TypeofstepCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type typeofstepIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type typeofstepIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $typeofstepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "typeofstep"
    objects: {
      stepes: Prisma.$stepPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      app: string
      work_type: $Enums.work_type
      meta_data: Prisma.JsonValue
      image_url: string
      create_at: Date
      update_at: Date
    }, ExtArgs["result"]["typeofstep"]>
    composites: {}
  }

  type typeofstepGetPayload<S extends boolean | null | undefined | typeofstepDefaultArgs> = $Result.GetResult<Prisma.$typeofstepPayload, S>

  type typeofstepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<typeofstepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TypeofstepCountAggregateInputType | true
    }

  export interface typeofstepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['typeofstep'], meta: { name: 'typeofstep' } }
    /**
     * Find zero or one Typeofstep that matches the filter.
     * @param {typeofstepFindUniqueArgs} args - Arguments to find a Typeofstep
     * @example
     * // Get one Typeofstep
     * const typeofstep = await prisma.typeofstep.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends typeofstepFindUniqueArgs>(args: SelectSubset<T, typeofstepFindUniqueArgs<ExtArgs>>): Prisma__typeofstepClient<$Result.GetResult<Prisma.$typeofstepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Typeofstep that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {typeofstepFindUniqueOrThrowArgs} args - Arguments to find a Typeofstep
     * @example
     * // Get one Typeofstep
     * const typeofstep = await prisma.typeofstep.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends typeofstepFindUniqueOrThrowArgs>(args: SelectSubset<T, typeofstepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__typeofstepClient<$Result.GetResult<Prisma.$typeofstepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Typeofstep that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typeofstepFindFirstArgs} args - Arguments to find a Typeofstep
     * @example
     * // Get one Typeofstep
     * const typeofstep = await prisma.typeofstep.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends typeofstepFindFirstArgs>(args?: SelectSubset<T, typeofstepFindFirstArgs<ExtArgs>>): Prisma__typeofstepClient<$Result.GetResult<Prisma.$typeofstepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Typeofstep that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typeofstepFindFirstOrThrowArgs} args - Arguments to find a Typeofstep
     * @example
     * // Get one Typeofstep
     * const typeofstep = await prisma.typeofstep.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends typeofstepFindFirstOrThrowArgs>(args?: SelectSubset<T, typeofstepFindFirstOrThrowArgs<ExtArgs>>): Prisma__typeofstepClient<$Result.GetResult<Prisma.$typeofstepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Typeofsteps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typeofstepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Typeofsteps
     * const typeofsteps = await prisma.typeofstep.findMany()
     * 
     * // Get first 10 Typeofsteps
     * const typeofsteps = await prisma.typeofstep.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const typeofstepWithIdOnly = await prisma.typeofstep.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends typeofstepFindManyArgs>(args?: SelectSubset<T, typeofstepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$typeofstepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Typeofstep.
     * @param {typeofstepCreateArgs} args - Arguments to create a Typeofstep.
     * @example
     * // Create one Typeofstep
     * const Typeofstep = await prisma.typeofstep.create({
     *   data: {
     *     // ... data to create a Typeofstep
     *   }
     * })
     * 
     */
    create<T extends typeofstepCreateArgs>(args: SelectSubset<T, typeofstepCreateArgs<ExtArgs>>): Prisma__typeofstepClient<$Result.GetResult<Prisma.$typeofstepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Typeofsteps.
     * @param {typeofstepCreateManyArgs} args - Arguments to create many Typeofsteps.
     * @example
     * // Create many Typeofsteps
     * const typeofstep = await prisma.typeofstep.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends typeofstepCreateManyArgs>(args?: SelectSubset<T, typeofstepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Typeofsteps and returns the data saved in the database.
     * @param {typeofstepCreateManyAndReturnArgs} args - Arguments to create many Typeofsteps.
     * @example
     * // Create many Typeofsteps
     * const typeofstep = await prisma.typeofstep.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Typeofsteps and only return the `id`
     * const typeofstepWithIdOnly = await prisma.typeofstep.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends typeofstepCreateManyAndReturnArgs>(args?: SelectSubset<T, typeofstepCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$typeofstepPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Typeofstep.
     * @param {typeofstepDeleteArgs} args - Arguments to delete one Typeofstep.
     * @example
     * // Delete one Typeofstep
     * const Typeofstep = await prisma.typeofstep.delete({
     *   where: {
     *     // ... filter to delete one Typeofstep
     *   }
     * })
     * 
     */
    delete<T extends typeofstepDeleteArgs>(args: SelectSubset<T, typeofstepDeleteArgs<ExtArgs>>): Prisma__typeofstepClient<$Result.GetResult<Prisma.$typeofstepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Typeofstep.
     * @param {typeofstepUpdateArgs} args - Arguments to update one Typeofstep.
     * @example
     * // Update one Typeofstep
     * const typeofstep = await prisma.typeofstep.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends typeofstepUpdateArgs>(args: SelectSubset<T, typeofstepUpdateArgs<ExtArgs>>): Prisma__typeofstepClient<$Result.GetResult<Prisma.$typeofstepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Typeofsteps.
     * @param {typeofstepDeleteManyArgs} args - Arguments to filter Typeofsteps to delete.
     * @example
     * // Delete a few Typeofsteps
     * const { count } = await prisma.typeofstep.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends typeofstepDeleteManyArgs>(args?: SelectSubset<T, typeofstepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Typeofsteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typeofstepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Typeofsteps
     * const typeofstep = await prisma.typeofstep.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends typeofstepUpdateManyArgs>(args: SelectSubset<T, typeofstepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Typeofsteps and returns the data updated in the database.
     * @param {typeofstepUpdateManyAndReturnArgs} args - Arguments to update many Typeofsteps.
     * @example
     * // Update many Typeofsteps
     * const typeofstep = await prisma.typeofstep.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Typeofsteps and only return the `id`
     * const typeofstepWithIdOnly = await prisma.typeofstep.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends typeofstepUpdateManyAndReturnArgs>(args: SelectSubset<T, typeofstepUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$typeofstepPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Typeofstep.
     * @param {typeofstepUpsertArgs} args - Arguments to update or create a Typeofstep.
     * @example
     * // Update or create a Typeofstep
     * const typeofstep = await prisma.typeofstep.upsert({
     *   create: {
     *     // ... data to create a Typeofstep
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Typeofstep we want to update
     *   }
     * })
     */
    upsert<T extends typeofstepUpsertArgs>(args: SelectSubset<T, typeofstepUpsertArgs<ExtArgs>>): Prisma__typeofstepClient<$Result.GetResult<Prisma.$typeofstepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Typeofsteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typeofstepCountArgs} args - Arguments to filter Typeofsteps to count.
     * @example
     * // Count the number of Typeofsteps
     * const count = await prisma.typeofstep.count({
     *   where: {
     *     // ... the filter for the Typeofsteps we want to count
     *   }
     * })
    **/
    count<T extends typeofstepCountArgs>(
      args?: Subset<T, typeofstepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TypeofstepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Typeofstep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeofstepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TypeofstepAggregateArgs>(args: Subset<T, TypeofstepAggregateArgs>): Prisma.PrismaPromise<GetTypeofstepAggregateType<T>>

    /**
     * Group by Typeofstep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typeofstepGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends typeofstepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: typeofstepGroupByArgs['orderBy'] }
        : { orderBy?: typeofstepGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, typeofstepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypeofstepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the typeofstep model
   */
  readonly fields: typeofstepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for typeofstep.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__typeofstepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stepes<T extends typeofstep$stepesArgs<ExtArgs> = {}>(args?: Subset<T, typeofstep$stepesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the typeofstep model
   */
  interface typeofstepFieldRefs {
    readonly id: FieldRef<"typeofstep", 'Int'>
    readonly name: FieldRef<"typeofstep", 'String'>
    readonly app: FieldRef<"typeofstep", 'String'>
    readonly work_type: FieldRef<"typeofstep", 'work_type'>
    readonly meta_data: FieldRef<"typeofstep", 'Json'>
    readonly image_url: FieldRef<"typeofstep", 'String'>
    readonly create_at: FieldRef<"typeofstep", 'DateTime'>
    readonly update_at: FieldRef<"typeofstep", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * typeofstep findUnique
   */
  export type typeofstepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the typeofstep
     */
    select?: typeofstepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the typeofstep
     */
    omit?: typeofstepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typeofstepInclude<ExtArgs> | null
    /**
     * Filter, which typeofstep to fetch.
     */
    where: typeofstepWhereUniqueInput
  }

  /**
   * typeofstep findUniqueOrThrow
   */
  export type typeofstepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the typeofstep
     */
    select?: typeofstepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the typeofstep
     */
    omit?: typeofstepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typeofstepInclude<ExtArgs> | null
    /**
     * Filter, which typeofstep to fetch.
     */
    where: typeofstepWhereUniqueInput
  }

  /**
   * typeofstep findFirst
   */
  export type typeofstepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the typeofstep
     */
    select?: typeofstepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the typeofstep
     */
    omit?: typeofstepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typeofstepInclude<ExtArgs> | null
    /**
     * Filter, which typeofstep to fetch.
     */
    where?: typeofstepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of typeofsteps to fetch.
     */
    orderBy?: typeofstepOrderByWithRelationInput | typeofstepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for typeofsteps.
     */
    cursor?: typeofstepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` typeofsteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` typeofsteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of typeofsteps.
     */
    distinct?: TypeofstepScalarFieldEnum | TypeofstepScalarFieldEnum[]
  }

  /**
   * typeofstep findFirstOrThrow
   */
  export type typeofstepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the typeofstep
     */
    select?: typeofstepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the typeofstep
     */
    omit?: typeofstepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typeofstepInclude<ExtArgs> | null
    /**
     * Filter, which typeofstep to fetch.
     */
    where?: typeofstepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of typeofsteps to fetch.
     */
    orderBy?: typeofstepOrderByWithRelationInput | typeofstepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for typeofsteps.
     */
    cursor?: typeofstepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` typeofsteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` typeofsteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of typeofsteps.
     */
    distinct?: TypeofstepScalarFieldEnum | TypeofstepScalarFieldEnum[]
  }

  /**
   * typeofstep findMany
   */
  export type typeofstepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the typeofstep
     */
    select?: typeofstepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the typeofstep
     */
    omit?: typeofstepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typeofstepInclude<ExtArgs> | null
    /**
     * Filter, which typeofsteps to fetch.
     */
    where?: typeofstepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of typeofsteps to fetch.
     */
    orderBy?: typeofstepOrderByWithRelationInput | typeofstepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing typeofsteps.
     */
    cursor?: typeofstepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` typeofsteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` typeofsteps.
     */
    skip?: number
    distinct?: TypeofstepScalarFieldEnum | TypeofstepScalarFieldEnum[]
  }

  /**
   * typeofstep create
   */
  export type typeofstepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the typeofstep
     */
    select?: typeofstepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the typeofstep
     */
    omit?: typeofstepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typeofstepInclude<ExtArgs> | null
    /**
     * The data needed to create a typeofstep.
     */
    data: XOR<typeofstepCreateInput, typeofstepUncheckedCreateInput>
  }

  /**
   * typeofstep createMany
   */
  export type typeofstepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many typeofsteps.
     */
    data: typeofstepCreateManyInput | typeofstepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * typeofstep createManyAndReturn
   */
  export type typeofstepCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the typeofstep
     */
    select?: typeofstepSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the typeofstep
     */
    omit?: typeofstepOmit<ExtArgs> | null
    /**
     * The data used to create many typeofsteps.
     */
    data: typeofstepCreateManyInput | typeofstepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * typeofstep update
   */
  export type typeofstepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the typeofstep
     */
    select?: typeofstepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the typeofstep
     */
    omit?: typeofstepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typeofstepInclude<ExtArgs> | null
    /**
     * The data needed to update a typeofstep.
     */
    data: XOR<typeofstepUpdateInput, typeofstepUncheckedUpdateInput>
    /**
     * Choose, which typeofstep to update.
     */
    where: typeofstepWhereUniqueInput
  }

  /**
   * typeofstep updateMany
   */
  export type typeofstepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update typeofsteps.
     */
    data: XOR<typeofstepUpdateManyMutationInput, typeofstepUncheckedUpdateManyInput>
    /**
     * Filter which typeofsteps to update
     */
    where?: typeofstepWhereInput
    /**
     * Limit how many typeofsteps to update.
     */
    limit?: number
  }

  /**
   * typeofstep updateManyAndReturn
   */
  export type typeofstepUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the typeofstep
     */
    select?: typeofstepSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the typeofstep
     */
    omit?: typeofstepOmit<ExtArgs> | null
    /**
     * The data used to update typeofsteps.
     */
    data: XOR<typeofstepUpdateManyMutationInput, typeofstepUncheckedUpdateManyInput>
    /**
     * Filter which typeofsteps to update
     */
    where?: typeofstepWhereInput
    /**
     * Limit how many typeofsteps to update.
     */
    limit?: number
  }

  /**
   * typeofstep upsert
   */
  export type typeofstepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the typeofstep
     */
    select?: typeofstepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the typeofstep
     */
    omit?: typeofstepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typeofstepInclude<ExtArgs> | null
    /**
     * The filter to search for the typeofstep to update in case it exists.
     */
    where: typeofstepWhereUniqueInput
    /**
     * In case the typeofstep found by the `where` argument doesn't exist, create a new typeofstep with this data.
     */
    create: XOR<typeofstepCreateInput, typeofstepUncheckedCreateInput>
    /**
     * In case the typeofstep was found with the provided `where` argument, update it with this data.
     */
    update: XOR<typeofstepUpdateInput, typeofstepUncheckedUpdateInput>
  }

  /**
   * typeofstep delete
   */
  export type typeofstepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the typeofstep
     */
    select?: typeofstepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the typeofstep
     */
    omit?: typeofstepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typeofstepInclude<ExtArgs> | null
    /**
     * Filter which typeofstep to delete.
     */
    where: typeofstepWhereUniqueInput
  }

  /**
   * typeofstep deleteMany
   */
  export type typeofstepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which typeofsteps to delete
     */
    where?: typeofstepWhereInput
    /**
     * Limit how many typeofsteps to delete.
     */
    limit?: number
  }

  /**
   * typeofstep.stepes
   */
  export type typeofstep$stepesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the step
     */
    select?: stepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the step
     */
    omit?: stepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepInclude<ExtArgs> | null
    where?: stepWhereInput
    orderBy?: stepOrderByWithRelationInput | stepOrderByWithRelationInput[]
    cursor?: stepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * typeofstep without action
   */
  export type typeofstepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the typeofstep
     */
    select?: typeofstepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the typeofstep
     */
    omit?: typeofstepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typeofstepInclude<ExtArgs> | null
  }


  /**
   * Model workflow
   */

  export type AggregateWorkflow = {
    _count: WorkflowCountAggregateOutputType | null
    _avg: WorkflowAvgAggregateOutputType | null
    _sum: WorkflowSumAggregateOutputType | null
    _min: WorkflowMinAggregateOutputType | null
    _max: WorkflowMaxAggregateOutputType | null
  }

  export type WorkflowAvgAggregateOutputType = {
    id: number | null
  }

  export type WorkflowSumAggregateOutputType = {
    id: number | null
  }

  export type WorkflowMinAggregateOutputType = {
    id: number | null
    name: string | null
    status: $Enums.status | null
    create_at: Date | null
    update_at: Date | null
  }

  export type WorkflowMaxAggregateOutputType = {
    id: number | null
    name: string | null
    status: $Enums.status | null
    create_at: Date | null
    update_at: Date | null
  }

  export type WorkflowCountAggregateOutputType = {
    id: number
    name: number
    status: number
    create_at: number
    update_at: number
    _all: number
  }


  export type WorkflowAvgAggregateInputType = {
    id?: true
  }

  export type WorkflowSumAggregateInputType = {
    id?: true
  }

  export type WorkflowMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
    create_at?: true
    update_at?: true
  }

  export type WorkflowMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
    create_at?: true
    update_at?: true
  }

  export type WorkflowCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    create_at?: true
    update_at?: true
    _all?: true
  }

  export type WorkflowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workflow to aggregate.
     */
    where?: workflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workflows to fetch.
     */
    orderBy?: workflowOrderByWithRelationInput | workflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: workflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned workflows
    **/
    _count?: true | WorkflowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkflowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkflowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowMaxAggregateInputType
  }

  export type GetWorkflowAggregateType<T extends WorkflowAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflow[P]>
      : GetScalarType<T[P], AggregateWorkflow[P]>
  }




  export type workflowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workflowWhereInput
    orderBy?: workflowOrderByWithAggregationInput | workflowOrderByWithAggregationInput[]
    by: WorkflowScalarFieldEnum[] | WorkflowScalarFieldEnum
    having?: workflowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowCountAggregateInputType | true
    _avg?: WorkflowAvgAggregateInputType
    _sum?: WorkflowSumAggregateInputType
    _min?: WorkflowMinAggregateInputType
    _max?: WorkflowMaxAggregateInputType
  }

  export type WorkflowGroupByOutputType = {
    id: number
    name: string
    status: $Enums.status
    create_at: Date
    update_at: Date
    _count: WorkflowCountAggregateOutputType | null
    _avg: WorkflowAvgAggregateOutputType | null
    _sum: WorkflowSumAggregateOutputType | null
    _min: WorkflowMinAggregateOutputType | null
    _max: WorkflowMaxAggregateOutputType | null
  }

  type GetWorkflowGroupByPayload<T extends workflowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkflowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowGroupByOutputType[P]>
        }
      >
    >


  export type workflowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    create_at?: boolean
    update_at?: boolean
    stepes?: boolean | workflow$stepesArgs<ExtArgs>
    stepes_runs?: boolean | workflow$stepes_runsArgs<ExtArgs>
    _count?: boolean | WorkflowCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflow"]>

  export type workflowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    create_at?: boolean
    update_at?: boolean
  }, ExtArgs["result"]["workflow"]>

  export type workflowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    create_at?: boolean
    update_at?: boolean
  }, ExtArgs["result"]["workflow"]>

  export type workflowSelectScalar = {
    id?: boolean
    name?: boolean
    status?: boolean
    create_at?: boolean
    update_at?: boolean
  }

  export type workflowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "status" | "create_at" | "update_at", ExtArgs["result"]["workflow"]>
  export type workflowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stepes?: boolean | workflow$stepesArgs<ExtArgs>
    stepes_runs?: boolean | workflow$stepes_runsArgs<ExtArgs>
    _count?: boolean | WorkflowCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type workflowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type workflowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $workflowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "workflow"
    objects: {
      stepes: Prisma.$stepPayload<ExtArgs>[]
      stepes_runs: Prisma.$stepes_runPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      status: $Enums.status
      create_at: Date
      update_at: Date
    }, ExtArgs["result"]["workflow"]>
    composites: {}
  }

  type workflowGetPayload<S extends boolean | null | undefined | workflowDefaultArgs> = $Result.GetResult<Prisma.$workflowPayload, S>

  type workflowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<workflowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkflowCountAggregateInputType | true
    }

  export interface workflowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['workflow'], meta: { name: 'workflow' } }
    /**
     * Find zero or one Workflow that matches the filter.
     * @param {workflowFindUniqueArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends workflowFindUniqueArgs>(args: SelectSubset<T, workflowFindUniqueArgs<ExtArgs>>): Prisma__workflowClient<$Result.GetResult<Prisma.$workflowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workflow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {workflowFindUniqueOrThrowArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends workflowFindUniqueOrThrowArgs>(args: SelectSubset<T, workflowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__workflowClient<$Result.GetResult<Prisma.$workflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workflow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workflowFindFirstArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends workflowFindFirstArgs>(args?: SelectSubset<T, workflowFindFirstArgs<ExtArgs>>): Prisma__workflowClient<$Result.GetResult<Prisma.$workflowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workflow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workflowFindFirstOrThrowArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends workflowFindFirstOrThrowArgs>(args?: SelectSubset<T, workflowFindFirstOrThrowArgs<ExtArgs>>): Prisma__workflowClient<$Result.GetResult<Prisma.$workflowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workflows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workflowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workflows
     * const workflows = await prisma.workflow.findMany()
     * 
     * // Get first 10 Workflows
     * const workflows = await prisma.workflow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowWithIdOnly = await prisma.workflow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends workflowFindManyArgs>(args?: SelectSubset<T, workflowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workflowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workflow.
     * @param {workflowCreateArgs} args - Arguments to create a Workflow.
     * @example
     * // Create one Workflow
     * const Workflow = await prisma.workflow.create({
     *   data: {
     *     // ... data to create a Workflow
     *   }
     * })
     * 
     */
    create<T extends workflowCreateArgs>(args: SelectSubset<T, workflowCreateArgs<ExtArgs>>): Prisma__workflowClient<$Result.GetResult<Prisma.$workflowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workflows.
     * @param {workflowCreateManyArgs} args - Arguments to create many Workflows.
     * @example
     * // Create many Workflows
     * const workflow = await prisma.workflow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends workflowCreateManyArgs>(args?: SelectSubset<T, workflowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workflows and returns the data saved in the database.
     * @param {workflowCreateManyAndReturnArgs} args - Arguments to create many Workflows.
     * @example
     * // Create many Workflows
     * const workflow = await prisma.workflow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workflows and only return the `id`
     * const workflowWithIdOnly = await prisma.workflow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends workflowCreateManyAndReturnArgs>(args?: SelectSubset<T, workflowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workflowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workflow.
     * @param {workflowDeleteArgs} args - Arguments to delete one Workflow.
     * @example
     * // Delete one Workflow
     * const Workflow = await prisma.workflow.delete({
     *   where: {
     *     // ... filter to delete one Workflow
     *   }
     * })
     * 
     */
    delete<T extends workflowDeleteArgs>(args: SelectSubset<T, workflowDeleteArgs<ExtArgs>>): Prisma__workflowClient<$Result.GetResult<Prisma.$workflowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workflow.
     * @param {workflowUpdateArgs} args - Arguments to update one Workflow.
     * @example
     * // Update one Workflow
     * const workflow = await prisma.workflow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends workflowUpdateArgs>(args: SelectSubset<T, workflowUpdateArgs<ExtArgs>>): Prisma__workflowClient<$Result.GetResult<Prisma.$workflowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workflows.
     * @param {workflowDeleteManyArgs} args - Arguments to filter Workflows to delete.
     * @example
     * // Delete a few Workflows
     * const { count } = await prisma.workflow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends workflowDeleteManyArgs>(args?: SelectSubset<T, workflowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workflowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workflows
     * const workflow = await prisma.workflow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends workflowUpdateManyArgs>(args: SelectSubset<T, workflowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workflows and returns the data updated in the database.
     * @param {workflowUpdateManyAndReturnArgs} args - Arguments to update many Workflows.
     * @example
     * // Update many Workflows
     * const workflow = await prisma.workflow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workflows and only return the `id`
     * const workflowWithIdOnly = await prisma.workflow.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends workflowUpdateManyAndReturnArgs>(args: SelectSubset<T, workflowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workflowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workflow.
     * @param {workflowUpsertArgs} args - Arguments to update or create a Workflow.
     * @example
     * // Update or create a Workflow
     * const workflow = await prisma.workflow.upsert({
     *   create: {
     *     // ... data to create a Workflow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workflow we want to update
     *   }
     * })
     */
    upsert<T extends workflowUpsertArgs>(args: SelectSubset<T, workflowUpsertArgs<ExtArgs>>): Prisma__workflowClient<$Result.GetResult<Prisma.$workflowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workflowCountArgs} args - Arguments to filter Workflows to count.
     * @example
     * // Count the number of Workflows
     * const count = await prisma.workflow.count({
     *   where: {
     *     // ... the filter for the Workflows we want to count
     *   }
     * })
    **/
    count<T extends workflowCountArgs>(
      args?: Subset<T, workflowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkflowAggregateArgs>(args: Subset<T, WorkflowAggregateArgs>): Prisma.PrismaPromise<GetWorkflowAggregateType<T>>

    /**
     * Group by Workflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workflowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends workflowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: workflowGroupByArgs['orderBy'] }
        : { orderBy?: workflowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, workflowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the workflow model
   */
  readonly fields: workflowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for workflow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__workflowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stepes<T extends workflow$stepesArgs<ExtArgs> = {}>(args?: Subset<T, workflow$stepesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stepes_runs<T extends workflow$stepes_runsArgs<ExtArgs> = {}>(args?: Subset<T, workflow$stepes_runsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stepes_runPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the workflow model
   */
  interface workflowFieldRefs {
    readonly id: FieldRef<"workflow", 'Int'>
    readonly name: FieldRef<"workflow", 'String'>
    readonly status: FieldRef<"workflow", 'status'>
    readonly create_at: FieldRef<"workflow", 'DateTime'>
    readonly update_at: FieldRef<"workflow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * workflow findUnique
   */
  export type workflowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workflow
     */
    select?: workflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workflow
     */
    omit?: workflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workflowInclude<ExtArgs> | null
    /**
     * Filter, which workflow to fetch.
     */
    where: workflowWhereUniqueInput
  }

  /**
   * workflow findUniqueOrThrow
   */
  export type workflowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workflow
     */
    select?: workflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workflow
     */
    omit?: workflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workflowInclude<ExtArgs> | null
    /**
     * Filter, which workflow to fetch.
     */
    where: workflowWhereUniqueInput
  }

  /**
   * workflow findFirst
   */
  export type workflowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workflow
     */
    select?: workflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workflow
     */
    omit?: workflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workflowInclude<ExtArgs> | null
    /**
     * Filter, which workflow to fetch.
     */
    where?: workflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workflows to fetch.
     */
    orderBy?: workflowOrderByWithRelationInput | workflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workflows.
     */
    cursor?: workflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workflows.
     */
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * workflow findFirstOrThrow
   */
  export type workflowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workflow
     */
    select?: workflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workflow
     */
    omit?: workflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workflowInclude<ExtArgs> | null
    /**
     * Filter, which workflow to fetch.
     */
    where?: workflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workflows to fetch.
     */
    orderBy?: workflowOrderByWithRelationInput | workflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workflows.
     */
    cursor?: workflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workflows.
     */
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * workflow findMany
   */
  export type workflowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workflow
     */
    select?: workflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workflow
     */
    omit?: workflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workflowInclude<ExtArgs> | null
    /**
     * Filter, which workflows to fetch.
     */
    where?: workflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workflows to fetch.
     */
    orderBy?: workflowOrderByWithRelationInput | workflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing workflows.
     */
    cursor?: workflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workflows.
     */
    skip?: number
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * workflow create
   */
  export type workflowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workflow
     */
    select?: workflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workflow
     */
    omit?: workflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workflowInclude<ExtArgs> | null
    /**
     * The data needed to create a workflow.
     */
    data: XOR<workflowCreateInput, workflowUncheckedCreateInput>
  }

  /**
   * workflow createMany
   */
  export type workflowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many workflows.
     */
    data: workflowCreateManyInput | workflowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * workflow createManyAndReturn
   */
  export type workflowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workflow
     */
    select?: workflowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workflow
     */
    omit?: workflowOmit<ExtArgs> | null
    /**
     * The data used to create many workflows.
     */
    data: workflowCreateManyInput | workflowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * workflow update
   */
  export type workflowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workflow
     */
    select?: workflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workflow
     */
    omit?: workflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workflowInclude<ExtArgs> | null
    /**
     * The data needed to update a workflow.
     */
    data: XOR<workflowUpdateInput, workflowUncheckedUpdateInput>
    /**
     * Choose, which workflow to update.
     */
    where: workflowWhereUniqueInput
  }

  /**
   * workflow updateMany
   */
  export type workflowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update workflows.
     */
    data: XOR<workflowUpdateManyMutationInput, workflowUncheckedUpdateManyInput>
    /**
     * Filter which workflows to update
     */
    where?: workflowWhereInput
    /**
     * Limit how many workflows to update.
     */
    limit?: number
  }

  /**
   * workflow updateManyAndReturn
   */
  export type workflowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workflow
     */
    select?: workflowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workflow
     */
    omit?: workflowOmit<ExtArgs> | null
    /**
     * The data used to update workflows.
     */
    data: XOR<workflowUpdateManyMutationInput, workflowUncheckedUpdateManyInput>
    /**
     * Filter which workflows to update
     */
    where?: workflowWhereInput
    /**
     * Limit how many workflows to update.
     */
    limit?: number
  }

  /**
   * workflow upsert
   */
  export type workflowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workflow
     */
    select?: workflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workflow
     */
    omit?: workflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workflowInclude<ExtArgs> | null
    /**
     * The filter to search for the workflow to update in case it exists.
     */
    where: workflowWhereUniqueInput
    /**
     * In case the workflow found by the `where` argument doesn't exist, create a new workflow with this data.
     */
    create: XOR<workflowCreateInput, workflowUncheckedCreateInput>
    /**
     * In case the workflow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<workflowUpdateInput, workflowUncheckedUpdateInput>
  }

  /**
   * workflow delete
   */
  export type workflowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workflow
     */
    select?: workflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workflow
     */
    omit?: workflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workflowInclude<ExtArgs> | null
    /**
     * Filter which workflow to delete.
     */
    where: workflowWhereUniqueInput
  }

  /**
   * workflow deleteMany
   */
  export type workflowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workflows to delete
     */
    where?: workflowWhereInput
    /**
     * Limit how many workflows to delete.
     */
    limit?: number
  }

  /**
   * workflow.stepes
   */
  export type workflow$stepesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the step
     */
    select?: stepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the step
     */
    omit?: stepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepInclude<ExtArgs> | null
    where?: stepWhereInput
    orderBy?: stepOrderByWithRelationInput | stepOrderByWithRelationInput[]
    cursor?: stepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * workflow.stepes_runs
   */
  export type workflow$stepes_runsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stepes_run
     */
    select?: stepes_runSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stepes_run
     */
    omit?: stepes_runOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepes_runInclude<ExtArgs> | null
    where?: stepes_runWhereInput
    orderBy?: stepes_runOrderByWithRelationInput | stepes_runOrderByWithRelationInput[]
    cursor?: stepes_runWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Stepes_runScalarFieldEnum | Stepes_runScalarFieldEnum[]
  }

  /**
   * workflow without action
   */
  export type workflowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workflow
     */
    select?: workflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workflow
     */
    omit?: workflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workflowInclude<ExtArgs> | null
  }


  /**
   * Model step
   */

  export type AggregateStep = {
    _count: StepCountAggregateOutputType | null
    _avg: StepAvgAggregateOutputType | null
    _sum: StepSumAggregateOutputType | null
    _min: StepMinAggregateOutputType | null
    _max: StepMaxAggregateOutputType | null
  }

  export type StepAvgAggregateOutputType = {
    id: number | null
    index: number | null
    typeofstap_id: number | null
    user_id: number | null
    workflow_id: number | null
  }

  export type StepSumAggregateOutputType = {
    id: number | null
    index: number | null
    typeofstap_id: number | null
    user_id: number | null
    workflow_id: number | null
  }

  export type StepMinAggregateOutputType = {
    id: number | null
    name: string | null
    index: number | null
    typeofstap_id: number | null
    user_id: number | null
    workflow_id: number | null
    status: $Enums.status | null
    create_at: Date | null
    update_at: Date | null
  }

  export type StepMaxAggregateOutputType = {
    id: number | null
    name: string | null
    index: number | null
    typeofstap_id: number | null
    user_id: number | null
    workflow_id: number | null
    status: $Enums.status | null
    create_at: Date | null
    update_at: Date | null
  }

  export type StepCountAggregateOutputType = {
    id: number
    name: number
    index: number
    typeofstap_id: number
    user_id: number
    workflow_id: number
    meta_data: number
    status: number
    create_at: number
    update_at: number
    _all: number
  }


  export type StepAvgAggregateInputType = {
    id?: true
    index?: true
    typeofstap_id?: true
    user_id?: true
    workflow_id?: true
  }

  export type StepSumAggregateInputType = {
    id?: true
    index?: true
    typeofstap_id?: true
    user_id?: true
    workflow_id?: true
  }

  export type StepMinAggregateInputType = {
    id?: true
    name?: true
    index?: true
    typeofstap_id?: true
    user_id?: true
    workflow_id?: true
    status?: true
    create_at?: true
    update_at?: true
  }

  export type StepMaxAggregateInputType = {
    id?: true
    name?: true
    index?: true
    typeofstap_id?: true
    user_id?: true
    workflow_id?: true
    status?: true
    create_at?: true
    update_at?: true
  }

  export type StepCountAggregateInputType = {
    id?: true
    name?: true
    index?: true
    typeofstap_id?: true
    user_id?: true
    workflow_id?: true
    meta_data?: true
    status?: true
    create_at?: true
    update_at?: true
    _all?: true
  }

  export type StepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which step to aggregate.
     */
    where?: stepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of steps to fetch.
     */
    orderBy?: stepOrderByWithRelationInput | stepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned steps
    **/
    _count?: true | StepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StepAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StepSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StepMaxAggregateInputType
  }

  export type GetStepAggregateType<T extends StepAggregateArgs> = {
        [P in keyof T & keyof AggregateStep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStep[P]>
      : GetScalarType<T[P], AggregateStep[P]>
  }




  export type stepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stepWhereInput
    orderBy?: stepOrderByWithAggregationInput | stepOrderByWithAggregationInput[]
    by: StepScalarFieldEnum[] | StepScalarFieldEnum
    having?: stepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StepCountAggregateInputType | true
    _avg?: StepAvgAggregateInputType
    _sum?: StepSumAggregateInputType
    _min?: StepMinAggregateInputType
    _max?: StepMaxAggregateInputType
  }

  export type StepGroupByOutputType = {
    id: number
    name: string | null
    index: number
    typeofstap_id: number
    user_id: number
    workflow_id: number
    meta_data: JsonValue
    status: $Enums.status
    create_at: Date
    update_at: Date
    _count: StepCountAggregateOutputType | null
    _avg: StepAvgAggregateOutputType | null
    _sum: StepSumAggregateOutputType | null
    _min: StepMinAggregateOutputType | null
    _max: StepMaxAggregateOutputType | null
  }

  type GetStepGroupByPayload<T extends stepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StepGroupByOutputType[P]>
            : GetScalarType<T[P], StepGroupByOutputType[P]>
        }
      >
    >


  export type stepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    index?: boolean
    typeofstap_id?: boolean
    user_id?: boolean
    workflow_id?: boolean
    meta_data?: boolean
    status?: boolean
    create_at?: boolean
    update_at?: boolean
    typeofstep?: boolean | typeofstepDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    workflow?: boolean | workflowDefaultArgs<ExtArgs>
    stepes_runs?: boolean | step$stepes_runsArgs<ExtArgs>
    _count?: boolean | StepCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["step"]>

  export type stepSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    index?: boolean
    typeofstap_id?: boolean
    user_id?: boolean
    workflow_id?: boolean
    meta_data?: boolean
    status?: boolean
    create_at?: boolean
    update_at?: boolean
    typeofstep?: boolean | typeofstepDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    workflow?: boolean | workflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["step"]>

  export type stepSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    index?: boolean
    typeofstap_id?: boolean
    user_id?: boolean
    workflow_id?: boolean
    meta_data?: boolean
    status?: boolean
    create_at?: boolean
    update_at?: boolean
    typeofstep?: boolean | typeofstepDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    workflow?: boolean | workflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["step"]>

  export type stepSelectScalar = {
    id?: boolean
    name?: boolean
    index?: boolean
    typeofstap_id?: boolean
    user_id?: boolean
    workflow_id?: boolean
    meta_data?: boolean
    status?: boolean
    create_at?: boolean
    update_at?: boolean
  }

  export type stepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "index" | "typeofstap_id" | "user_id" | "workflow_id" | "meta_data" | "status" | "create_at" | "update_at", ExtArgs["result"]["step"]>
  export type stepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    typeofstep?: boolean | typeofstepDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    workflow?: boolean | workflowDefaultArgs<ExtArgs>
    stepes_runs?: boolean | step$stepes_runsArgs<ExtArgs>
    _count?: boolean | StepCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type stepIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    typeofstep?: boolean | typeofstepDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    workflow?: boolean | workflowDefaultArgs<ExtArgs>
  }
  export type stepIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    typeofstep?: boolean | typeofstepDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    workflow?: boolean | workflowDefaultArgs<ExtArgs>
  }

  export type $stepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "step"
    objects: {
      typeofstep: Prisma.$typeofstepPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
      workflow: Prisma.$workflowPayload<ExtArgs>
      stepes_runs: Prisma.$stepes_runPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      index: number
      typeofstap_id: number
      user_id: number
      workflow_id: number
      meta_data: Prisma.JsonValue
      status: $Enums.status
      create_at: Date
      update_at: Date
    }, ExtArgs["result"]["step"]>
    composites: {}
  }

  type stepGetPayload<S extends boolean | null | undefined | stepDefaultArgs> = $Result.GetResult<Prisma.$stepPayload, S>

  type stepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StepCountAggregateInputType | true
    }

  export interface stepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['step'], meta: { name: 'step' } }
    /**
     * Find zero or one Step that matches the filter.
     * @param {stepFindUniqueArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stepFindUniqueArgs>(args: SelectSubset<T, stepFindUniqueArgs<ExtArgs>>): Prisma__stepClient<$Result.GetResult<Prisma.$stepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Step that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stepFindUniqueOrThrowArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stepFindUniqueOrThrowArgs>(args: SelectSubset<T, stepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stepClient<$Result.GetResult<Prisma.$stepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Step that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stepFindFirstArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stepFindFirstArgs>(args?: SelectSubset<T, stepFindFirstArgs<ExtArgs>>): Prisma__stepClient<$Result.GetResult<Prisma.$stepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Step that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stepFindFirstOrThrowArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stepFindFirstOrThrowArgs>(args?: SelectSubset<T, stepFindFirstOrThrowArgs<ExtArgs>>): Prisma__stepClient<$Result.GetResult<Prisma.$stepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Steps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Steps
     * const steps = await prisma.step.findMany()
     * 
     * // Get first 10 Steps
     * const steps = await prisma.step.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stepWithIdOnly = await prisma.step.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends stepFindManyArgs>(args?: SelectSubset<T, stepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Step.
     * @param {stepCreateArgs} args - Arguments to create a Step.
     * @example
     * // Create one Step
     * const Step = await prisma.step.create({
     *   data: {
     *     // ... data to create a Step
     *   }
     * })
     * 
     */
    create<T extends stepCreateArgs>(args: SelectSubset<T, stepCreateArgs<ExtArgs>>): Prisma__stepClient<$Result.GetResult<Prisma.$stepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Steps.
     * @param {stepCreateManyArgs} args - Arguments to create many Steps.
     * @example
     * // Create many Steps
     * const step = await prisma.step.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stepCreateManyArgs>(args?: SelectSubset<T, stepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Steps and returns the data saved in the database.
     * @param {stepCreateManyAndReturnArgs} args - Arguments to create many Steps.
     * @example
     * // Create many Steps
     * const step = await prisma.step.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Steps and only return the `id`
     * const stepWithIdOnly = await prisma.step.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends stepCreateManyAndReturnArgs>(args?: SelectSubset<T, stepCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stepPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Step.
     * @param {stepDeleteArgs} args - Arguments to delete one Step.
     * @example
     * // Delete one Step
     * const Step = await prisma.step.delete({
     *   where: {
     *     // ... filter to delete one Step
     *   }
     * })
     * 
     */
    delete<T extends stepDeleteArgs>(args: SelectSubset<T, stepDeleteArgs<ExtArgs>>): Prisma__stepClient<$Result.GetResult<Prisma.$stepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Step.
     * @param {stepUpdateArgs} args - Arguments to update one Step.
     * @example
     * // Update one Step
     * const step = await prisma.step.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stepUpdateArgs>(args: SelectSubset<T, stepUpdateArgs<ExtArgs>>): Prisma__stepClient<$Result.GetResult<Prisma.$stepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Steps.
     * @param {stepDeleteManyArgs} args - Arguments to filter Steps to delete.
     * @example
     * // Delete a few Steps
     * const { count } = await prisma.step.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stepDeleteManyArgs>(args?: SelectSubset<T, stepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Steps
     * const step = await prisma.step.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stepUpdateManyArgs>(args: SelectSubset<T, stepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Steps and returns the data updated in the database.
     * @param {stepUpdateManyAndReturnArgs} args - Arguments to update many Steps.
     * @example
     * // Update many Steps
     * const step = await prisma.step.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Steps and only return the `id`
     * const stepWithIdOnly = await prisma.step.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends stepUpdateManyAndReturnArgs>(args: SelectSubset<T, stepUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stepPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Step.
     * @param {stepUpsertArgs} args - Arguments to update or create a Step.
     * @example
     * // Update or create a Step
     * const step = await prisma.step.upsert({
     *   create: {
     *     // ... data to create a Step
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Step we want to update
     *   }
     * })
     */
    upsert<T extends stepUpsertArgs>(args: SelectSubset<T, stepUpsertArgs<ExtArgs>>): Prisma__stepClient<$Result.GetResult<Prisma.$stepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stepCountArgs} args - Arguments to filter Steps to count.
     * @example
     * // Count the number of Steps
     * const count = await prisma.step.count({
     *   where: {
     *     // ... the filter for the Steps we want to count
     *   }
     * })
    **/
    count<T extends stepCountArgs>(
      args?: Subset<T, stepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Step.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StepAggregateArgs>(args: Subset<T, StepAggregateArgs>): Prisma.PrismaPromise<GetStepAggregateType<T>>

    /**
     * Group by Step.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stepGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends stepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stepGroupByArgs['orderBy'] }
        : { orderBy?: stepGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, stepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the step model
   */
  readonly fields: stepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for step.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    typeofstep<T extends typeofstepDefaultArgs<ExtArgs> = {}>(args?: Subset<T, typeofstepDefaultArgs<ExtArgs>>): Prisma__typeofstepClient<$Result.GetResult<Prisma.$typeofstepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workflow<T extends workflowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, workflowDefaultArgs<ExtArgs>>): Prisma__workflowClient<$Result.GetResult<Prisma.$workflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stepes_runs<T extends step$stepes_runsArgs<ExtArgs> = {}>(args?: Subset<T, step$stepes_runsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stepes_runPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the step model
   */
  interface stepFieldRefs {
    readonly id: FieldRef<"step", 'Int'>
    readonly name: FieldRef<"step", 'String'>
    readonly index: FieldRef<"step", 'Int'>
    readonly typeofstap_id: FieldRef<"step", 'Int'>
    readonly user_id: FieldRef<"step", 'Int'>
    readonly workflow_id: FieldRef<"step", 'Int'>
    readonly meta_data: FieldRef<"step", 'Json'>
    readonly status: FieldRef<"step", 'status'>
    readonly create_at: FieldRef<"step", 'DateTime'>
    readonly update_at: FieldRef<"step", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * step findUnique
   */
  export type stepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the step
     */
    select?: stepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the step
     */
    omit?: stepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepInclude<ExtArgs> | null
    /**
     * Filter, which step to fetch.
     */
    where: stepWhereUniqueInput
  }

  /**
   * step findUniqueOrThrow
   */
  export type stepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the step
     */
    select?: stepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the step
     */
    omit?: stepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepInclude<ExtArgs> | null
    /**
     * Filter, which step to fetch.
     */
    where: stepWhereUniqueInput
  }

  /**
   * step findFirst
   */
  export type stepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the step
     */
    select?: stepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the step
     */
    omit?: stepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepInclude<ExtArgs> | null
    /**
     * Filter, which step to fetch.
     */
    where?: stepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of steps to fetch.
     */
    orderBy?: stepOrderByWithRelationInput | stepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for steps.
     */
    cursor?: stepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of steps.
     */
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * step findFirstOrThrow
   */
  export type stepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the step
     */
    select?: stepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the step
     */
    omit?: stepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepInclude<ExtArgs> | null
    /**
     * Filter, which step to fetch.
     */
    where?: stepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of steps to fetch.
     */
    orderBy?: stepOrderByWithRelationInput | stepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for steps.
     */
    cursor?: stepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of steps.
     */
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * step findMany
   */
  export type stepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the step
     */
    select?: stepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the step
     */
    omit?: stepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepInclude<ExtArgs> | null
    /**
     * Filter, which steps to fetch.
     */
    where?: stepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of steps to fetch.
     */
    orderBy?: stepOrderByWithRelationInput | stepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing steps.
     */
    cursor?: stepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` steps.
     */
    skip?: number
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * step create
   */
  export type stepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the step
     */
    select?: stepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the step
     */
    omit?: stepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepInclude<ExtArgs> | null
    /**
     * The data needed to create a step.
     */
    data: XOR<stepCreateInput, stepUncheckedCreateInput>
  }

  /**
   * step createMany
   */
  export type stepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many steps.
     */
    data: stepCreateManyInput | stepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * step createManyAndReturn
   */
  export type stepCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the step
     */
    select?: stepSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the step
     */
    omit?: stepOmit<ExtArgs> | null
    /**
     * The data used to create many steps.
     */
    data: stepCreateManyInput | stepCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * step update
   */
  export type stepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the step
     */
    select?: stepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the step
     */
    omit?: stepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepInclude<ExtArgs> | null
    /**
     * The data needed to update a step.
     */
    data: XOR<stepUpdateInput, stepUncheckedUpdateInput>
    /**
     * Choose, which step to update.
     */
    where: stepWhereUniqueInput
  }

  /**
   * step updateMany
   */
  export type stepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update steps.
     */
    data: XOR<stepUpdateManyMutationInput, stepUncheckedUpdateManyInput>
    /**
     * Filter which steps to update
     */
    where?: stepWhereInput
    /**
     * Limit how many steps to update.
     */
    limit?: number
  }

  /**
   * step updateManyAndReturn
   */
  export type stepUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the step
     */
    select?: stepSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the step
     */
    omit?: stepOmit<ExtArgs> | null
    /**
     * The data used to update steps.
     */
    data: XOR<stepUpdateManyMutationInput, stepUncheckedUpdateManyInput>
    /**
     * Filter which steps to update
     */
    where?: stepWhereInput
    /**
     * Limit how many steps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * step upsert
   */
  export type stepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the step
     */
    select?: stepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the step
     */
    omit?: stepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepInclude<ExtArgs> | null
    /**
     * The filter to search for the step to update in case it exists.
     */
    where: stepWhereUniqueInput
    /**
     * In case the step found by the `where` argument doesn't exist, create a new step with this data.
     */
    create: XOR<stepCreateInput, stepUncheckedCreateInput>
    /**
     * In case the step was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stepUpdateInput, stepUncheckedUpdateInput>
  }

  /**
   * step delete
   */
  export type stepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the step
     */
    select?: stepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the step
     */
    omit?: stepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepInclude<ExtArgs> | null
    /**
     * Filter which step to delete.
     */
    where: stepWhereUniqueInput
  }

  /**
   * step deleteMany
   */
  export type stepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which steps to delete
     */
    where?: stepWhereInput
    /**
     * Limit how many steps to delete.
     */
    limit?: number
  }

  /**
   * step.stepes_runs
   */
  export type step$stepes_runsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stepes_run
     */
    select?: stepes_runSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stepes_run
     */
    omit?: stepes_runOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepes_runInclude<ExtArgs> | null
    where?: stepes_runWhereInput
    orderBy?: stepes_runOrderByWithRelationInput | stepes_runOrderByWithRelationInput[]
    cursor?: stepes_runWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Stepes_runScalarFieldEnum | Stepes_runScalarFieldEnum[]
  }

  /**
   * step without action
   */
  export type stepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the step
     */
    select?: stepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the step
     */
    omit?: stepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepInclude<ExtArgs> | null
  }


  /**
   * Model stepes_run
   */

  export type AggregateStepes_run = {
    _count: Stepes_runCountAggregateOutputType | null
    _avg: Stepes_runAvgAggregateOutputType | null
    _sum: Stepes_runSumAggregateOutputType | null
    _min: Stepes_runMinAggregateOutputType | null
    _max: Stepes_runMaxAggregateOutputType | null
  }

  export type Stepes_runAvgAggregateOutputType = {
    id: number | null
    step_id: number | null
    workflow_id: number | null
  }

  export type Stepes_runSumAggregateOutputType = {
    id: number | null
    step_id: number | null
    workflow_id: number | null
  }

  export type Stepes_runMinAggregateOutputType = {
    id: number | null
    status: $Enums.working_status | null
    step_id: number | null
    workflow_id: number | null
    create_at: Date | null
    update_at: Date | null
  }

  export type Stepes_runMaxAggregateOutputType = {
    id: number | null
    status: $Enums.working_status | null
    step_id: number | null
    workflow_id: number | null
    create_at: Date | null
    update_at: Date | null
  }

  export type Stepes_runCountAggregateOutputType = {
    id: number
    meta_data: number
    status: number
    step_id: number
    workflow_id: number
    create_at: number
    update_at: number
    _all: number
  }


  export type Stepes_runAvgAggregateInputType = {
    id?: true
    step_id?: true
    workflow_id?: true
  }

  export type Stepes_runSumAggregateInputType = {
    id?: true
    step_id?: true
    workflow_id?: true
  }

  export type Stepes_runMinAggregateInputType = {
    id?: true
    status?: true
    step_id?: true
    workflow_id?: true
    create_at?: true
    update_at?: true
  }

  export type Stepes_runMaxAggregateInputType = {
    id?: true
    status?: true
    step_id?: true
    workflow_id?: true
    create_at?: true
    update_at?: true
  }

  export type Stepes_runCountAggregateInputType = {
    id?: true
    meta_data?: true
    status?: true
    step_id?: true
    workflow_id?: true
    create_at?: true
    update_at?: true
    _all?: true
  }

  export type Stepes_runAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stepes_run to aggregate.
     */
    where?: stepes_runWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stepes_runs to fetch.
     */
    orderBy?: stepes_runOrderByWithRelationInput | stepes_runOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stepes_runWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stepes_runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stepes_runs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stepes_runs
    **/
    _count?: true | Stepes_runCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Stepes_runAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Stepes_runSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Stepes_runMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Stepes_runMaxAggregateInputType
  }

  export type GetStepes_runAggregateType<T extends Stepes_runAggregateArgs> = {
        [P in keyof T & keyof AggregateStepes_run]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStepes_run[P]>
      : GetScalarType<T[P], AggregateStepes_run[P]>
  }




  export type stepes_runGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stepes_runWhereInput
    orderBy?: stepes_runOrderByWithAggregationInput | stepes_runOrderByWithAggregationInput[]
    by: Stepes_runScalarFieldEnum[] | Stepes_runScalarFieldEnum
    having?: stepes_runScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Stepes_runCountAggregateInputType | true
    _avg?: Stepes_runAvgAggregateInputType
    _sum?: Stepes_runSumAggregateInputType
    _min?: Stepes_runMinAggregateInputType
    _max?: Stepes_runMaxAggregateInputType
  }

  export type Stepes_runGroupByOutputType = {
    id: number
    meta_data: JsonValue
    status: $Enums.working_status
    step_id: number
    workflow_id: number
    create_at: Date
    update_at: Date
    _count: Stepes_runCountAggregateOutputType | null
    _avg: Stepes_runAvgAggregateOutputType | null
    _sum: Stepes_runSumAggregateOutputType | null
    _min: Stepes_runMinAggregateOutputType | null
    _max: Stepes_runMaxAggregateOutputType | null
  }

  type GetStepes_runGroupByPayload<T extends stepes_runGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Stepes_runGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Stepes_runGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Stepes_runGroupByOutputType[P]>
            : GetScalarType<T[P], Stepes_runGroupByOutputType[P]>
        }
      >
    >


  export type stepes_runSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meta_data?: boolean
    status?: boolean
    step_id?: boolean
    workflow_id?: boolean
    create_at?: boolean
    update_at?: boolean
    step?: boolean | stepDefaultArgs<ExtArgs>
    workflow?: boolean | workflowDefaultArgs<ExtArgs>
    out_box_step_run?: boolean | stepes_run$out_box_step_runArgs<ExtArgs>
    working_step_validation?: boolean | stepes_run$working_step_validationArgs<ExtArgs>
    _count?: boolean | Stepes_runCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stepes_run"]>

  export type stepes_runSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meta_data?: boolean
    status?: boolean
    step_id?: boolean
    workflow_id?: boolean
    create_at?: boolean
    update_at?: boolean
    step?: boolean | stepDefaultArgs<ExtArgs>
    workflow?: boolean | workflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stepes_run"]>

  export type stepes_runSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meta_data?: boolean
    status?: boolean
    step_id?: boolean
    workflow_id?: boolean
    create_at?: boolean
    update_at?: boolean
    step?: boolean | stepDefaultArgs<ExtArgs>
    workflow?: boolean | workflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stepes_run"]>

  export type stepes_runSelectScalar = {
    id?: boolean
    meta_data?: boolean
    status?: boolean
    step_id?: boolean
    workflow_id?: boolean
    create_at?: boolean
    update_at?: boolean
  }

  export type stepes_runOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "meta_data" | "status" | "step_id" | "workflow_id" | "create_at" | "update_at", ExtArgs["result"]["stepes_run"]>
  export type stepes_runInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    step?: boolean | stepDefaultArgs<ExtArgs>
    workflow?: boolean | workflowDefaultArgs<ExtArgs>
    out_box_step_run?: boolean | stepes_run$out_box_step_runArgs<ExtArgs>
    working_step_validation?: boolean | stepes_run$working_step_validationArgs<ExtArgs>
    _count?: boolean | Stepes_runCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type stepes_runIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    step?: boolean | stepDefaultArgs<ExtArgs>
    workflow?: boolean | workflowDefaultArgs<ExtArgs>
  }
  export type stepes_runIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    step?: boolean | stepDefaultArgs<ExtArgs>
    workflow?: boolean | workflowDefaultArgs<ExtArgs>
  }

  export type $stepes_runPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stepes_run"
    objects: {
      step: Prisma.$stepPayload<ExtArgs>
      workflow: Prisma.$workflowPayload<ExtArgs>
      out_box_step_run: Prisma.$out_box_step_runPayload<ExtArgs>[]
      working_step_validation: Prisma.$working_step_validatorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      meta_data: Prisma.JsonValue
      status: $Enums.working_status
      step_id: number
      workflow_id: number
      create_at: Date
      update_at: Date
    }, ExtArgs["result"]["stepes_run"]>
    composites: {}
  }

  type stepes_runGetPayload<S extends boolean | null | undefined | stepes_runDefaultArgs> = $Result.GetResult<Prisma.$stepes_runPayload, S>

  type stepes_runCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stepes_runFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Stepes_runCountAggregateInputType | true
    }

  export interface stepes_runDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stepes_run'], meta: { name: 'stepes_run' } }
    /**
     * Find zero or one Stepes_run that matches the filter.
     * @param {stepes_runFindUniqueArgs} args - Arguments to find a Stepes_run
     * @example
     * // Get one Stepes_run
     * const stepes_run = await prisma.stepes_run.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stepes_runFindUniqueArgs>(args: SelectSubset<T, stepes_runFindUniqueArgs<ExtArgs>>): Prisma__stepes_runClient<$Result.GetResult<Prisma.$stepes_runPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stepes_run that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stepes_runFindUniqueOrThrowArgs} args - Arguments to find a Stepes_run
     * @example
     * // Get one Stepes_run
     * const stepes_run = await prisma.stepes_run.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stepes_runFindUniqueOrThrowArgs>(args: SelectSubset<T, stepes_runFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stepes_runClient<$Result.GetResult<Prisma.$stepes_runPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stepes_run that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stepes_runFindFirstArgs} args - Arguments to find a Stepes_run
     * @example
     * // Get one Stepes_run
     * const stepes_run = await prisma.stepes_run.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stepes_runFindFirstArgs>(args?: SelectSubset<T, stepes_runFindFirstArgs<ExtArgs>>): Prisma__stepes_runClient<$Result.GetResult<Prisma.$stepes_runPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stepes_run that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stepes_runFindFirstOrThrowArgs} args - Arguments to find a Stepes_run
     * @example
     * // Get one Stepes_run
     * const stepes_run = await prisma.stepes_run.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stepes_runFindFirstOrThrowArgs>(args?: SelectSubset<T, stepes_runFindFirstOrThrowArgs<ExtArgs>>): Prisma__stepes_runClient<$Result.GetResult<Prisma.$stepes_runPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stepes_runs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stepes_runFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stepes_runs
     * const stepes_runs = await prisma.stepes_run.findMany()
     * 
     * // Get first 10 Stepes_runs
     * const stepes_runs = await prisma.stepes_run.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stepes_runWithIdOnly = await prisma.stepes_run.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends stepes_runFindManyArgs>(args?: SelectSubset<T, stepes_runFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stepes_runPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stepes_run.
     * @param {stepes_runCreateArgs} args - Arguments to create a Stepes_run.
     * @example
     * // Create one Stepes_run
     * const Stepes_run = await prisma.stepes_run.create({
     *   data: {
     *     // ... data to create a Stepes_run
     *   }
     * })
     * 
     */
    create<T extends stepes_runCreateArgs>(args: SelectSubset<T, stepes_runCreateArgs<ExtArgs>>): Prisma__stepes_runClient<$Result.GetResult<Prisma.$stepes_runPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stepes_runs.
     * @param {stepes_runCreateManyArgs} args - Arguments to create many Stepes_runs.
     * @example
     * // Create many Stepes_runs
     * const stepes_run = await prisma.stepes_run.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stepes_runCreateManyArgs>(args?: SelectSubset<T, stepes_runCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stepes_runs and returns the data saved in the database.
     * @param {stepes_runCreateManyAndReturnArgs} args - Arguments to create many Stepes_runs.
     * @example
     * // Create many Stepes_runs
     * const stepes_run = await prisma.stepes_run.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stepes_runs and only return the `id`
     * const stepes_runWithIdOnly = await prisma.stepes_run.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends stepes_runCreateManyAndReturnArgs>(args?: SelectSubset<T, stepes_runCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stepes_runPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stepes_run.
     * @param {stepes_runDeleteArgs} args - Arguments to delete one Stepes_run.
     * @example
     * // Delete one Stepes_run
     * const Stepes_run = await prisma.stepes_run.delete({
     *   where: {
     *     // ... filter to delete one Stepes_run
     *   }
     * })
     * 
     */
    delete<T extends stepes_runDeleteArgs>(args: SelectSubset<T, stepes_runDeleteArgs<ExtArgs>>): Prisma__stepes_runClient<$Result.GetResult<Prisma.$stepes_runPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stepes_run.
     * @param {stepes_runUpdateArgs} args - Arguments to update one Stepes_run.
     * @example
     * // Update one Stepes_run
     * const stepes_run = await prisma.stepes_run.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stepes_runUpdateArgs>(args: SelectSubset<T, stepes_runUpdateArgs<ExtArgs>>): Prisma__stepes_runClient<$Result.GetResult<Prisma.$stepes_runPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stepes_runs.
     * @param {stepes_runDeleteManyArgs} args - Arguments to filter Stepes_runs to delete.
     * @example
     * // Delete a few Stepes_runs
     * const { count } = await prisma.stepes_run.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stepes_runDeleteManyArgs>(args?: SelectSubset<T, stepes_runDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stepes_runs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stepes_runUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stepes_runs
     * const stepes_run = await prisma.stepes_run.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stepes_runUpdateManyArgs>(args: SelectSubset<T, stepes_runUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stepes_runs and returns the data updated in the database.
     * @param {stepes_runUpdateManyAndReturnArgs} args - Arguments to update many Stepes_runs.
     * @example
     * // Update many Stepes_runs
     * const stepes_run = await prisma.stepes_run.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stepes_runs and only return the `id`
     * const stepes_runWithIdOnly = await prisma.stepes_run.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends stepes_runUpdateManyAndReturnArgs>(args: SelectSubset<T, stepes_runUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stepes_runPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stepes_run.
     * @param {stepes_runUpsertArgs} args - Arguments to update or create a Stepes_run.
     * @example
     * // Update or create a Stepes_run
     * const stepes_run = await prisma.stepes_run.upsert({
     *   create: {
     *     // ... data to create a Stepes_run
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stepes_run we want to update
     *   }
     * })
     */
    upsert<T extends stepes_runUpsertArgs>(args: SelectSubset<T, stepes_runUpsertArgs<ExtArgs>>): Prisma__stepes_runClient<$Result.GetResult<Prisma.$stepes_runPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stepes_runs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stepes_runCountArgs} args - Arguments to filter Stepes_runs to count.
     * @example
     * // Count the number of Stepes_runs
     * const count = await prisma.stepes_run.count({
     *   where: {
     *     // ... the filter for the Stepes_runs we want to count
     *   }
     * })
    **/
    count<T extends stepes_runCountArgs>(
      args?: Subset<T, stepes_runCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Stepes_runCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stepes_run.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Stepes_runAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Stepes_runAggregateArgs>(args: Subset<T, Stepes_runAggregateArgs>): Prisma.PrismaPromise<GetStepes_runAggregateType<T>>

    /**
     * Group by Stepes_run.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stepes_runGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends stepes_runGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stepes_runGroupByArgs['orderBy'] }
        : { orderBy?: stepes_runGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, stepes_runGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStepes_runGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stepes_run model
   */
  readonly fields: stepes_runFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stepes_run.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stepes_runClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    step<T extends stepDefaultArgs<ExtArgs> = {}>(args?: Subset<T, stepDefaultArgs<ExtArgs>>): Prisma__stepClient<$Result.GetResult<Prisma.$stepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workflow<T extends workflowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, workflowDefaultArgs<ExtArgs>>): Prisma__workflowClient<$Result.GetResult<Prisma.$workflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    out_box_step_run<T extends stepes_run$out_box_step_runArgs<ExtArgs> = {}>(args?: Subset<T, stepes_run$out_box_step_runArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$out_box_step_runPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    working_step_validation<T extends stepes_run$working_step_validationArgs<ExtArgs> = {}>(args?: Subset<T, stepes_run$working_step_validationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$working_step_validatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the stepes_run model
   */
  interface stepes_runFieldRefs {
    readonly id: FieldRef<"stepes_run", 'Int'>
    readonly meta_data: FieldRef<"stepes_run", 'Json'>
    readonly status: FieldRef<"stepes_run", 'working_status'>
    readonly step_id: FieldRef<"stepes_run", 'Int'>
    readonly workflow_id: FieldRef<"stepes_run", 'Int'>
    readonly create_at: FieldRef<"stepes_run", 'DateTime'>
    readonly update_at: FieldRef<"stepes_run", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * stepes_run findUnique
   */
  export type stepes_runFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stepes_run
     */
    select?: stepes_runSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stepes_run
     */
    omit?: stepes_runOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepes_runInclude<ExtArgs> | null
    /**
     * Filter, which stepes_run to fetch.
     */
    where: stepes_runWhereUniqueInput
  }

  /**
   * stepes_run findUniqueOrThrow
   */
  export type stepes_runFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stepes_run
     */
    select?: stepes_runSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stepes_run
     */
    omit?: stepes_runOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepes_runInclude<ExtArgs> | null
    /**
     * Filter, which stepes_run to fetch.
     */
    where: stepes_runWhereUniqueInput
  }

  /**
   * stepes_run findFirst
   */
  export type stepes_runFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stepes_run
     */
    select?: stepes_runSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stepes_run
     */
    omit?: stepes_runOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepes_runInclude<ExtArgs> | null
    /**
     * Filter, which stepes_run to fetch.
     */
    where?: stepes_runWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stepes_runs to fetch.
     */
    orderBy?: stepes_runOrderByWithRelationInput | stepes_runOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stepes_runs.
     */
    cursor?: stepes_runWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stepes_runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stepes_runs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stepes_runs.
     */
    distinct?: Stepes_runScalarFieldEnum | Stepes_runScalarFieldEnum[]
  }

  /**
   * stepes_run findFirstOrThrow
   */
  export type stepes_runFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stepes_run
     */
    select?: stepes_runSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stepes_run
     */
    omit?: stepes_runOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepes_runInclude<ExtArgs> | null
    /**
     * Filter, which stepes_run to fetch.
     */
    where?: stepes_runWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stepes_runs to fetch.
     */
    orderBy?: stepes_runOrderByWithRelationInput | stepes_runOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stepes_runs.
     */
    cursor?: stepes_runWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stepes_runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stepes_runs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stepes_runs.
     */
    distinct?: Stepes_runScalarFieldEnum | Stepes_runScalarFieldEnum[]
  }

  /**
   * stepes_run findMany
   */
  export type stepes_runFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stepes_run
     */
    select?: stepes_runSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stepes_run
     */
    omit?: stepes_runOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepes_runInclude<ExtArgs> | null
    /**
     * Filter, which stepes_runs to fetch.
     */
    where?: stepes_runWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stepes_runs to fetch.
     */
    orderBy?: stepes_runOrderByWithRelationInput | stepes_runOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stepes_runs.
     */
    cursor?: stepes_runWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stepes_runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stepes_runs.
     */
    skip?: number
    distinct?: Stepes_runScalarFieldEnum | Stepes_runScalarFieldEnum[]
  }

  /**
   * stepes_run create
   */
  export type stepes_runCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stepes_run
     */
    select?: stepes_runSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stepes_run
     */
    omit?: stepes_runOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepes_runInclude<ExtArgs> | null
    /**
     * The data needed to create a stepes_run.
     */
    data: XOR<stepes_runCreateInput, stepes_runUncheckedCreateInput>
  }

  /**
   * stepes_run createMany
   */
  export type stepes_runCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stepes_runs.
     */
    data: stepes_runCreateManyInput | stepes_runCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stepes_run createManyAndReturn
   */
  export type stepes_runCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stepes_run
     */
    select?: stepes_runSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stepes_run
     */
    omit?: stepes_runOmit<ExtArgs> | null
    /**
     * The data used to create many stepes_runs.
     */
    data: stepes_runCreateManyInput | stepes_runCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepes_runIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * stepes_run update
   */
  export type stepes_runUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stepes_run
     */
    select?: stepes_runSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stepes_run
     */
    omit?: stepes_runOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepes_runInclude<ExtArgs> | null
    /**
     * The data needed to update a stepes_run.
     */
    data: XOR<stepes_runUpdateInput, stepes_runUncheckedUpdateInput>
    /**
     * Choose, which stepes_run to update.
     */
    where: stepes_runWhereUniqueInput
  }

  /**
   * stepes_run updateMany
   */
  export type stepes_runUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stepes_runs.
     */
    data: XOR<stepes_runUpdateManyMutationInput, stepes_runUncheckedUpdateManyInput>
    /**
     * Filter which stepes_runs to update
     */
    where?: stepes_runWhereInput
    /**
     * Limit how many stepes_runs to update.
     */
    limit?: number
  }

  /**
   * stepes_run updateManyAndReturn
   */
  export type stepes_runUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stepes_run
     */
    select?: stepes_runSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stepes_run
     */
    omit?: stepes_runOmit<ExtArgs> | null
    /**
     * The data used to update stepes_runs.
     */
    data: XOR<stepes_runUpdateManyMutationInput, stepes_runUncheckedUpdateManyInput>
    /**
     * Filter which stepes_runs to update
     */
    where?: stepes_runWhereInput
    /**
     * Limit how many stepes_runs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepes_runIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * stepes_run upsert
   */
  export type stepes_runUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stepes_run
     */
    select?: stepes_runSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stepes_run
     */
    omit?: stepes_runOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepes_runInclude<ExtArgs> | null
    /**
     * The filter to search for the stepes_run to update in case it exists.
     */
    where: stepes_runWhereUniqueInput
    /**
     * In case the stepes_run found by the `where` argument doesn't exist, create a new stepes_run with this data.
     */
    create: XOR<stepes_runCreateInput, stepes_runUncheckedCreateInput>
    /**
     * In case the stepes_run was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stepes_runUpdateInput, stepes_runUncheckedUpdateInput>
  }

  /**
   * stepes_run delete
   */
  export type stepes_runDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stepes_run
     */
    select?: stepes_runSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stepes_run
     */
    omit?: stepes_runOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepes_runInclude<ExtArgs> | null
    /**
     * Filter which stepes_run to delete.
     */
    where: stepes_runWhereUniqueInput
  }

  /**
   * stepes_run deleteMany
   */
  export type stepes_runDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stepes_runs to delete
     */
    where?: stepes_runWhereInput
    /**
     * Limit how many stepes_runs to delete.
     */
    limit?: number
  }

  /**
   * stepes_run.out_box_step_run
   */
  export type stepes_run$out_box_step_runArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the out_box_step_run
     */
    select?: out_box_step_runSelect<ExtArgs> | null
    /**
     * Omit specific fields from the out_box_step_run
     */
    omit?: out_box_step_runOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: out_box_step_runInclude<ExtArgs> | null
    where?: out_box_step_runWhereInput
    orderBy?: out_box_step_runOrderByWithRelationInput | out_box_step_runOrderByWithRelationInput[]
    cursor?: out_box_step_runWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Out_box_step_runScalarFieldEnum | Out_box_step_runScalarFieldEnum[]
  }

  /**
   * stepes_run.working_step_validation
   */
  export type stepes_run$working_step_validationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the working_step_validator
     */
    select?: working_step_validatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the working_step_validator
     */
    omit?: working_step_validatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: working_step_validatorInclude<ExtArgs> | null
    where?: working_step_validatorWhereInput
    orderBy?: working_step_validatorOrderByWithRelationInput | working_step_validatorOrderByWithRelationInput[]
    cursor?: working_step_validatorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Working_step_validatorScalarFieldEnum | Working_step_validatorScalarFieldEnum[]
  }

  /**
   * stepes_run without action
   */
  export type stepes_runDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stepes_run
     */
    select?: stepes_runSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stepes_run
     */
    omit?: stepes_runOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stepes_runInclude<ExtArgs> | null
  }


  /**
   * Model out_box_step_run
   */

  export type AggregateOut_box_step_run = {
    _count: Out_box_step_runCountAggregateOutputType | null
    _avg: Out_box_step_runAvgAggregateOutputType | null
    _sum: Out_box_step_runSumAggregateOutputType | null
    _min: Out_box_step_runMinAggregateOutputType | null
    _max: Out_box_step_runMaxAggregateOutputType | null
  }

  export type Out_box_step_runAvgAggregateOutputType = {
    id: number | null
    stepes_run_id: number | null
  }

  export type Out_box_step_runSumAggregateOutputType = {
    id: number | null
    stepes_run_id: number | null
  }

  export type Out_box_step_runMinAggregateOutputType = {
    id: number | null
    stepes_run_id: number | null
    create_at: Date | null
    update_at: Date | null
  }

  export type Out_box_step_runMaxAggregateOutputType = {
    id: number | null
    stepes_run_id: number | null
    create_at: Date | null
    update_at: Date | null
  }

  export type Out_box_step_runCountAggregateOutputType = {
    id: number
    stepes_run_id: number
    create_at: number
    update_at: number
    _all: number
  }


  export type Out_box_step_runAvgAggregateInputType = {
    id?: true
    stepes_run_id?: true
  }

  export type Out_box_step_runSumAggregateInputType = {
    id?: true
    stepes_run_id?: true
  }

  export type Out_box_step_runMinAggregateInputType = {
    id?: true
    stepes_run_id?: true
    create_at?: true
    update_at?: true
  }

  export type Out_box_step_runMaxAggregateInputType = {
    id?: true
    stepes_run_id?: true
    create_at?: true
    update_at?: true
  }

  export type Out_box_step_runCountAggregateInputType = {
    id?: true
    stepes_run_id?: true
    create_at?: true
    update_at?: true
    _all?: true
  }

  export type Out_box_step_runAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which out_box_step_run to aggregate.
     */
    where?: out_box_step_runWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of out_box_step_runs to fetch.
     */
    orderBy?: out_box_step_runOrderByWithRelationInput | out_box_step_runOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: out_box_step_runWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` out_box_step_runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` out_box_step_runs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned out_box_step_runs
    **/
    _count?: true | Out_box_step_runCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Out_box_step_runAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Out_box_step_runSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Out_box_step_runMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Out_box_step_runMaxAggregateInputType
  }

  export type GetOut_box_step_runAggregateType<T extends Out_box_step_runAggregateArgs> = {
        [P in keyof T & keyof AggregateOut_box_step_run]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOut_box_step_run[P]>
      : GetScalarType<T[P], AggregateOut_box_step_run[P]>
  }




  export type out_box_step_runGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: out_box_step_runWhereInput
    orderBy?: out_box_step_runOrderByWithAggregationInput | out_box_step_runOrderByWithAggregationInput[]
    by: Out_box_step_runScalarFieldEnum[] | Out_box_step_runScalarFieldEnum
    having?: out_box_step_runScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Out_box_step_runCountAggregateInputType | true
    _avg?: Out_box_step_runAvgAggregateInputType
    _sum?: Out_box_step_runSumAggregateInputType
    _min?: Out_box_step_runMinAggregateInputType
    _max?: Out_box_step_runMaxAggregateInputType
  }

  export type Out_box_step_runGroupByOutputType = {
    id: number
    stepes_run_id: number
    create_at: Date
    update_at: Date
    _count: Out_box_step_runCountAggregateOutputType | null
    _avg: Out_box_step_runAvgAggregateOutputType | null
    _sum: Out_box_step_runSumAggregateOutputType | null
    _min: Out_box_step_runMinAggregateOutputType | null
    _max: Out_box_step_runMaxAggregateOutputType | null
  }

  type GetOut_box_step_runGroupByPayload<T extends out_box_step_runGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Out_box_step_runGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Out_box_step_runGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Out_box_step_runGroupByOutputType[P]>
            : GetScalarType<T[P], Out_box_step_runGroupByOutputType[P]>
        }
      >
    >


  export type out_box_step_runSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stepes_run_id?: boolean
    create_at?: boolean
    update_at?: boolean
    stepes_run?: boolean | stepes_runDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["out_box_step_run"]>

  export type out_box_step_runSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stepes_run_id?: boolean
    create_at?: boolean
    update_at?: boolean
    stepes_run?: boolean | stepes_runDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["out_box_step_run"]>

  export type out_box_step_runSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stepes_run_id?: boolean
    create_at?: boolean
    update_at?: boolean
    stepes_run?: boolean | stepes_runDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["out_box_step_run"]>

  export type out_box_step_runSelectScalar = {
    id?: boolean
    stepes_run_id?: boolean
    create_at?: boolean
    update_at?: boolean
  }

  export type out_box_step_runOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "stepes_run_id" | "create_at" | "update_at", ExtArgs["result"]["out_box_step_run"]>
  export type out_box_step_runInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stepes_run?: boolean | stepes_runDefaultArgs<ExtArgs>
  }
  export type out_box_step_runIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stepes_run?: boolean | stepes_runDefaultArgs<ExtArgs>
  }
  export type out_box_step_runIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stepes_run?: boolean | stepes_runDefaultArgs<ExtArgs>
  }

  export type $out_box_step_runPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "out_box_step_run"
    objects: {
      stepes_run: Prisma.$stepes_runPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      stepes_run_id: number
      create_at: Date
      update_at: Date
    }, ExtArgs["result"]["out_box_step_run"]>
    composites: {}
  }

  type out_box_step_runGetPayload<S extends boolean | null | undefined | out_box_step_runDefaultArgs> = $Result.GetResult<Prisma.$out_box_step_runPayload, S>

  type out_box_step_runCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<out_box_step_runFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Out_box_step_runCountAggregateInputType | true
    }

  export interface out_box_step_runDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['out_box_step_run'], meta: { name: 'out_box_step_run' } }
    /**
     * Find zero or one Out_box_step_run that matches the filter.
     * @param {out_box_step_runFindUniqueArgs} args - Arguments to find a Out_box_step_run
     * @example
     * // Get one Out_box_step_run
     * const out_box_step_run = await prisma.out_box_step_run.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends out_box_step_runFindUniqueArgs>(args: SelectSubset<T, out_box_step_runFindUniqueArgs<ExtArgs>>): Prisma__out_box_step_runClient<$Result.GetResult<Prisma.$out_box_step_runPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Out_box_step_run that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {out_box_step_runFindUniqueOrThrowArgs} args - Arguments to find a Out_box_step_run
     * @example
     * // Get one Out_box_step_run
     * const out_box_step_run = await prisma.out_box_step_run.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends out_box_step_runFindUniqueOrThrowArgs>(args: SelectSubset<T, out_box_step_runFindUniqueOrThrowArgs<ExtArgs>>): Prisma__out_box_step_runClient<$Result.GetResult<Prisma.$out_box_step_runPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Out_box_step_run that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {out_box_step_runFindFirstArgs} args - Arguments to find a Out_box_step_run
     * @example
     * // Get one Out_box_step_run
     * const out_box_step_run = await prisma.out_box_step_run.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends out_box_step_runFindFirstArgs>(args?: SelectSubset<T, out_box_step_runFindFirstArgs<ExtArgs>>): Prisma__out_box_step_runClient<$Result.GetResult<Prisma.$out_box_step_runPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Out_box_step_run that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {out_box_step_runFindFirstOrThrowArgs} args - Arguments to find a Out_box_step_run
     * @example
     * // Get one Out_box_step_run
     * const out_box_step_run = await prisma.out_box_step_run.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends out_box_step_runFindFirstOrThrowArgs>(args?: SelectSubset<T, out_box_step_runFindFirstOrThrowArgs<ExtArgs>>): Prisma__out_box_step_runClient<$Result.GetResult<Prisma.$out_box_step_runPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Out_box_step_runs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {out_box_step_runFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Out_box_step_runs
     * const out_box_step_runs = await prisma.out_box_step_run.findMany()
     * 
     * // Get first 10 Out_box_step_runs
     * const out_box_step_runs = await prisma.out_box_step_run.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const out_box_step_runWithIdOnly = await prisma.out_box_step_run.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends out_box_step_runFindManyArgs>(args?: SelectSubset<T, out_box_step_runFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$out_box_step_runPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Out_box_step_run.
     * @param {out_box_step_runCreateArgs} args - Arguments to create a Out_box_step_run.
     * @example
     * // Create one Out_box_step_run
     * const Out_box_step_run = await prisma.out_box_step_run.create({
     *   data: {
     *     // ... data to create a Out_box_step_run
     *   }
     * })
     * 
     */
    create<T extends out_box_step_runCreateArgs>(args: SelectSubset<T, out_box_step_runCreateArgs<ExtArgs>>): Prisma__out_box_step_runClient<$Result.GetResult<Prisma.$out_box_step_runPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Out_box_step_runs.
     * @param {out_box_step_runCreateManyArgs} args - Arguments to create many Out_box_step_runs.
     * @example
     * // Create many Out_box_step_runs
     * const out_box_step_run = await prisma.out_box_step_run.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends out_box_step_runCreateManyArgs>(args?: SelectSubset<T, out_box_step_runCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Out_box_step_runs and returns the data saved in the database.
     * @param {out_box_step_runCreateManyAndReturnArgs} args - Arguments to create many Out_box_step_runs.
     * @example
     * // Create many Out_box_step_runs
     * const out_box_step_run = await prisma.out_box_step_run.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Out_box_step_runs and only return the `id`
     * const out_box_step_runWithIdOnly = await prisma.out_box_step_run.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends out_box_step_runCreateManyAndReturnArgs>(args?: SelectSubset<T, out_box_step_runCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$out_box_step_runPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Out_box_step_run.
     * @param {out_box_step_runDeleteArgs} args - Arguments to delete one Out_box_step_run.
     * @example
     * // Delete one Out_box_step_run
     * const Out_box_step_run = await prisma.out_box_step_run.delete({
     *   where: {
     *     // ... filter to delete one Out_box_step_run
     *   }
     * })
     * 
     */
    delete<T extends out_box_step_runDeleteArgs>(args: SelectSubset<T, out_box_step_runDeleteArgs<ExtArgs>>): Prisma__out_box_step_runClient<$Result.GetResult<Prisma.$out_box_step_runPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Out_box_step_run.
     * @param {out_box_step_runUpdateArgs} args - Arguments to update one Out_box_step_run.
     * @example
     * // Update one Out_box_step_run
     * const out_box_step_run = await prisma.out_box_step_run.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends out_box_step_runUpdateArgs>(args: SelectSubset<T, out_box_step_runUpdateArgs<ExtArgs>>): Prisma__out_box_step_runClient<$Result.GetResult<Prisma.$out_box_step_runPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Out_box_step_runs.
     * @param {out_box_step_runDeleteManyArgs} args - Arguments to filter Out_box_step_runs to delete.
     * @example
     * // Delete a few Out_box_step_runs
     * const { count } = await prisma.out_box_step_run.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends out_box_step_runDeleteManyArgs>(args?: SelectSubset<T, out_box_step_runDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Out_box_step_runs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {out_box_step_runUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Out_box_step_runs
     * const out_box_step_run = await prisma.out_box_step_run.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends out_box_step_runUpdateManyArgs>(args: SelectSubset<T, out_box_step_runUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Out_box_step_runs and returns the data updated in the database.
     * @param {out_box_step_runUpdateManyAndReturnArgs} args - Arguments to update many Out_box_step_runs.
     * @example
     * // Update many Out_box_step_runs
     * const out_box_step_run = await prisma.out_box_step_run.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Out_box_step_runs and only return the `id`
     * const out_box_step_runWithIdOnly = await prisma.out_box_step_run.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends out_box_step_runUpdateManyAndReturnArgs>(args: SelectSubset<T, out_box_step_runUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$out_box_step_runPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Out_box_step_run.
     * @param {out_box_step_runUpsertArgs} args - Arguments to update or create a Out_box_step_run.
     * @example
     * // Update or create a Out_box_step_run
     * const out_box_step_run = await prisma.out_box_step_run.upsert({
     *   create: {
     *     // ... data to create a Out_box_step_run
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Out_box_step_run we want to update
     *   }
     * })
     */
    upsert<T extends out_box_step_runUpsertArgs>(args: SelectSubset<T, out_box_step_runUpsertArgs<ExtArgs>>): Prisma__out_box_step_runClient<$Result.GetResult<Prisma.$out_box_step_runPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Out_box_step_runs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {out_box_step_runCountArgs} args - Arguments to filter Out_box_step_runs to count.
     * @example
     * // Count the number of Out_box_step_runs
     * const count = await prisma.out_box_step_run.count({
     *   where: {
     *     // ... the filter for the Out_box_step_runs we want to count
     *   }
     * })
    **/
    count<T extends out_box_step_runCountArgs>(
      args?: Subset<T, out_box_step_runCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Out_box_step_runCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Out_box_step_run.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Out_box_step_runAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Out_box_step_runAggregateArgs>(args: Subset<T, Out_box_step_runAggregateArgs>): Prisma.PrismaPromise<GetOut_box_step_runAggregateType<T>>

    /**
     * Group by Out_box_step_run.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {out_box_step_runGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends out_box_step_runGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: out_box_step_runGroupByArgs['orderBy'] }
        : { orderBy?: out_box_step_runGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, out_box_step_runGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOut_box_step_runGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the out_box_step_run model
   */
  readonly fields: out_box_step_runFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for out_box_step_run.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__out_box_step_runClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stepes_run<T extends stepes_runDefaultArgs<ExtArgs> = {}>(args?: Subset<T, stepes_runDefaultArgs<ExtArgs>>): Prisma__stepes_runClient<$Result.GetResult<Prisma.$stepes_runPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the out_box_step_run model
   */
  interface out_box_step_runFieldRefs {
    readonly id: FieldRef<"out_box_step_run", 'Int'>
    readonly stepes_run_id: FieldRef<"out_box_step_run", 'Int'>
    readonly create_at: FieldRef<"out_box_step_run", 'DateTime'>
    readonly update_at: FieldRef<"out_box_step_run", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * out_box_step_run findUnique
   */
  export type out_box_step_runFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the out_box_step_run
     */
    select?: out_box_step_runSelect<ExtArgs> | null
    /**
     * Omit specific fields from the out_box_step_run
     */
    omit?: out_box_step_runOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: out_box_step_runInclude<ExtArgs> | null
    /**
     * Filter, which out_box_step_run to fetch.
     */
    where: out_box_step_runWhereUniqueInput
  }

  /**
   * out_box_step_run findUniqueOrThrow
   */
  export type out_box_step_runFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the out_box_step_run
     */
    select?: out_box_step_runSelect<ExtArgs> | null
    /**
     * Omit specific fields from the out_box_step_run
     */
    omit?: out_box_step_runOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: out_box_step_runInclude<ExtArgs> | null
    /**
     * Filter, which out_box_step_run to fetch.
     */
    where: out_box_step_runWhereUniqueInput
  }

  /**
   * out_box_step_run findFirst
   */
  export type out_box_step_runFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the out_box_step_run
     */
    select?: out_box_step_runSelect<ExtArgs> | null
    /**
     * Omit specific fields from the out_box_step_run
     */
    omit?: out_box_step_runOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: out_box_step_runInclude<ExtArgs> | null
    /**
     * Filter, which out_box_step_run to fetch.
     */
    where?: out_box_step_runWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of out_box_step_runs to fetch.
     */
    orderBy?: out_box_step_runOrderByWithRelationInput | out_box_step_runOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for out_box_step_runs.
     */
    cursor?: out_box_step_runWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` out_box_step_runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` out_box_step_runs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of out_box_step_runs.
     */
    distinct?: Out_box_step_runScalarFieldEnum | Out_box_step_runScalarFieldEnum[]
  }

  /**
   * out_box_step_run findFirstOrThrow
   */
  export type out_box_step_runFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the out_box_step_run
     */
    select?: out_box_step_runSelect<ExtArgs> | null
    /**
     * Omit specific fields from the out_box_step_run
     */
    omit?: out_box_step_runOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: out_box_step_runInclude<ExtArgs> | null
    /**
     * Filter, which out_box_step_run to fetch.
     */
    where?: out_box_step_runWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of out_box_step_runs to fetch.
     */
    orderBy?: out_box_step_runOrderByWithRelationInput | out_box_step_runOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for out_box_step_runs.
     */
    cursor?: out_box_step_runWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` out_box_step_runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` out_box_step_runs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of out_box_step_runs.
     */
    distinct?: Out_box_step_runScalarFieldEnum | Out_box_step_runScalarFieldEnum[]
  }

  /**
   * out_box_step_run findMany
   */
  export type out_box_step_runFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the out_box_step_run
     */
    select?: out_box_step_runSelect<ExtArgs> | null
    /**
     * Omit specific fields from the out_box_step_run
     */
    omit?: out_box_step_runOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: out_box_step_runInclude<ExtArgs> | null
    /**
     * Filter, which out_box_step_runs to fetch.
     */
    where?: out_box_step_runWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of out_box_step_runs to fetch.
     */
    orderBy?: out_box_step_runOrderByWithRelationInput | out_box_step_runOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing out_box_step_runs.
     */
    cursor?: out_box_step_runWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` out_box_step_runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` out_box_step_runs.
     */
    skip?: number
    distinct?: Out_box_step_runScalarFieldEnum | Out_box_step_runScalarFieldEnum[]
  }

  /**
   * out_box_step_run create
   */
  export type out_box_step_runCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the out_box_step_run
     */
    select?: out_box_step_runSelect<ExtArgs> | null
    /**
     * Omit specific fields from the out_box_step_run
     */
    omit?: out_box_step_runOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: out_box_step_runInclude<ExtArgs> | null
    /**
     * The data needed to create a out_box_step_run.
     */
    data: XOR<out_box_step_runCreateInput, out_box_step_runUncheckedCreateInput>
  }

  /**
   * out_box_step_run createMany
   */
  export type out_box_step_runCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many out_box_step_runs.
     */
    data: out_box_step_runCreateManyInput | out_box_step_runCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * out_box_step_run createManyAndReturn
   */
  export type out_box_step_runCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the out_box_step_run
     */
    select?: out_box_step_runSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the out_box_step_run
     */
    omit?: out_box_step_runOmit<ExtArgs> | null
    /**
     * The data used to create many out_box_step_runs.
     */
    data: out_box_step_runCreateManyInput | out_box_step_runCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: out_box_step_runIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * out_box_step_run update
   */
  export type out_box_step_runUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the out_box_step_run
     */
    select?: out_box_step_runSelect<ExtArgs> | null
    /**
     * Omit specific fields from the out_box_step_run
     */
    omit?: out_box_step_runOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: out_box_step_runInclude<ExtArgs> | null
    /**
     * The data needed to update a out_box_step_run.
     */
    data: XOR<out_box_step_runUpdateInput, out_box_step_runUncheckedUpdateInput>
    /**
     * Choose, which out_box_step_run to update.
     */
    where: out_box_step_runWhereUniqueInput
  }

  /**
   * out_box_step_run updateMany
   */
  export type out_box_step_runUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update out_box_step_runs.
     */
    data: XOR<out_box_step_runUpdateManyMutationInput, out_box_step_runUncheckedUpdateManyInput>
    /**
     * Filter which out_box_step_runs to update
     */
    where?: out_box_step_runWhereInput
    /**
     * Limit how many out_box_step_runs to update.
     */
    limit?: number
  }

  /**
   * out_box_step_run updateManyAndReturn
   */
  export type out_box_step_runUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the out_box_step_run
     */
    select?: out_box_step_runSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the out_box_step_run
     */
    omit?: out_box_step_runOmit<ExtArgs> | null
    /**
     * The data used to update out_box_step_runs.
     */
    data: XOR<out_box_step_runUpdateManyMutationInput, out_box_step_runUncheckedUpdateManyInput>
    /**
     * Filter which out_box_step_runs to update
     */
    where?: out_box_step_runWhereInput
    /**
     * Limit how many out_box_step_runs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: out_box_step_runIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * out_box_step_run upsert
   */
  export type out_box_step_runUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the out_box_step_run
     */
    select?: out_box_step_runSelect<ExtArgs> | null
    /**
     * Omit specific fields from the out_box_step_run
     */
    omit?: out_box_step_runOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: out_box_step_runInclude<ExtArgs> | null
    /**
     * The filter to search for the out_box_step_run to update in case it exists.
     */
    where: out_box_step_runWhereUniqueInput
    /**
     * In case the out_box_step_run found by the `where` argument doesn't exist, create a new out_box_step_run with this data.
     */
    create: XOR<out_box_step_runCreateInput, out_box_step_runUncheckedCreateInput>
    /**
     * In case the out_box_step_run was found with the provided `where` argument, update it with this data.
     */
    update: XOR<out_box_step_runUpdateInput, out_box_step_runUncheckedUpdateInput>
  }

  /**
   * out_box_step_run delete
   */
  export type out_box_step_runDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the out_box_step_run
     */
    select?: out_box_step_runSelect<ExtArgs> | null
    /**
     * Omit specific fields from the out_box_step_run
     */
    omit?: out_box_step_runOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: out_box_step_runInclude<ExtArgs> | null
    /**
     * Filter which out_box_step_run to delete.
     */
    where: out_box_step_runWhereUniqueInput
  }

  /**
   * out_box_step_run deleteMany
   */
  export type out_box_step_runDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which out_box_step_runs to delete
     */
    where?: out_box_step_runWhereInput
    /**
     * Limit how many out_box_step_runs to delete.
     */
    limit?: number
  }

  /**
   * out_box_step_run without action
   */
  export type out_box_step_runDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the out_box_step_run
     */
    select?: out_box_step_runSelect<ExtArgs> | null
    /**
     * Omit specific fields from the out_box_step_run
     */
    omit?: out_box_step_runOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: out_box_step_runInclude<ExtArgs> | null
  }


  /**
   * Model working_step_validator
   */

  export type AggregateWorking_step_validator = {
    _count: Working_step_validatorCountAggregateOutputType | null
    _avg: Working_step_validatorAvgAggregateOutputType | null
    _sum: Working_step_validatorSumAggregateOutputType | null
    _min: Working_step_validatorMinAggregateOutputType | null
    _max: Working_step_validatorMaxAggregateOutputType | null
  }

  export type Working_step_validatorAvgAggregateOutputType = {
    id: number | null
    stepes_run_id: number | null
    index: number | null
  }

  export type Working_step_validatorSumAggregateOutputType = {
    id: number | null
    stepes_run_id: number | null
    index: number | null
  }

  export type Working_step_validatorMinAggregateOutputType = {
    id: number | null
    stepes_run_id: number | null
    email: string | null
    message_id: string | null
    index: number | null
    status: $Enums.step_validation_status | null
    create_at: Date | null
    update_at: Date | null
  }

  export type Working_step_validatorMaxAggregateOutputType = {
    id: number | null
    stepes_run_id: number | null
    email: string | null
    message_id: string | null
    index: number | null
    status: $Enums.step_validation_status | null
    create_at: Date | null
    update_at: Date | null
  }

  export type Working_step_validatorCountAggregateOutputType = {
    id: number
    stepes_run_id: number
    email: number
    message_id: number
    index: number
    status: number
    create_at: number
    update_at: number
    _all: number
  }


  export type Working_step_validatorAvgAggregateInputType = {
    id?: true
    stepes_run_id?: true
    index?: true
  }

  export type Working_step_validatorSumAggregateInputType = {
    id?: true
    stepes_run_id?: true
    index?: true
  }

  export type Working_step_validatorMinAggregateInputType = {
    id?: true
    stepes_run_id?: true
    email?: true
    message_id?: true
    index?: true
    status?: true
    create_at?: true
    update_at?: true
  }

  export type Working_step_validatorMaxAggregateInputType = {
    id?: true
    stepes_run_id?: true
    email?: true
    message_id?: true
    index?: true
    status?: true
    create_at?: true
    update_at?: true
  }

  export type Working_step_validatorCountAggregateInputType = {
    id?: true
    stepes_run_id?: true
    email?: true
    message_id?: true
    index?: true
    status?: true
    create_at?: true
    update_at?: true
    _all?: true
  }

  export type Working_step_validatorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which working_step_validator to aggregate.
     */
    where?: working_step_validatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of working_step_validators to fetch.
     */
    orderBy?: working_step_validatorOrderByWithRelationInput | working_step_validatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: working_step_validatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` working_step_validators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` working_step_validators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned working_step_validators
    **/
    _count?: true | Working_step_validatorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Working_step_validatorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Working_step_validatorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Working_step_validatorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Working_step_validatorMaxAggregateInputType
  }

  export type GetWorking_step_validatorAggregateType<T extends Working_step_validatorAggregateArgs> = {
        [P in keyof T & keyof AggregateWorking_step_validator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorking_step_validator[P]>
      : GetScalarType<T[P], AggregateWorking_step_validator[P]>
  }




  export type working_step_validatorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: working_step_validatorWhereInput
    orderBy?: working_step_validatorOrderByWithAggregationInput | working_step_validatorOrderByWithAggregationInput[]
    by: Working_step_validatorScalarFieldEnum[] | Working_step_validatorScalarFieldEnum
    having?: working_step_validatorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Working_step_validatorCountAggregateInputType | true
    _avg?: Working_step_validatorAvgAggregateInputType
    _sum?: Working_step_validatorSumAggregateInputType
    _min?: Working_step_validatorMinAggregateInputType
    _max?: Working_step_validatorMaxAggregateInputType
  }

  export type Working_step_validatorGroupByOutputType = {
    id: number
    stepes_run_id: number
    email: string | null
    message_id: string | null
    index: number
    status: $Enums.step_validation_status
    create_at: Date
    update_at: Date
    _count: Working_step_validatorCountAggregateOutputType | null
    _avg: Working_step_validatorAvgAggregateOutputType | null
    _sum: Working_step_validatorSumAggregateOutputType | null
    _min: Working_step_validatorMinAggregateOutputType | null
    _max: Working_step_validatorMaxAggregateOutputType | null
  }

  type GetWorking_step_validatorGroupByPayload<T extends working_step_validatorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Working_step_validatorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Working_step_validatorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Working_step_validatorGroupByOutputType[P]>
            : GetScalarType<T[P], Working_step_validatorGroupByOutputType[P]>
        }
      >
    >


  export type working_step_validatorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stepes_run_id?: boolean
    email?: boolean
    message_id?: boolean
    index?: boolean
    status?: boolean
    create_at?: boolean
    update_at?: boolean
    stepes_run?: boolean | stepes_runDefaultArgs<ExtArgs>
    reseve_email_validator?: boolean | working_step_validator$reseve_email_validatorArgs<ExtArgs>
    _count?: boolean | Working_step_validatorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["working_step_validator"]>

  export type working_step_validatorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stepes_run_id?: boolean
    email?: boolean
    message_id?: boolean
    index?: boolean
    status?: boolean
    create_at?: boolean
    update_at?: boolean
    stepes_run?: boolean | stepes_runDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["working_step_validator"]>

  export type working_step_validatorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stepes_run_id?: boolean
    email?: boolean
    message_id?: boolean
    index?: boolean
    status?: boolean
    create_at?: boolean
    update_at?: boolean
    stepes_run?: boolean | stepes_runDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["working_step_validator"]>

  export type working_step_validatorSelectScalar = {
    id?: boolean
    stepes_run_id?: boolean
    email?: boolean
    message_id?: boolean
    index?: boolean
    status?: boolean
    create_at?: boolean
    update_at?: boolean
  }

  export type working_step_validatorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "stepes_run_id" | "email" | "message_id" | "index" | "status" | "create_at" | "update_at", ExtArgs["result"]["working_step_validator"]>
  export type working_step_validatorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stepes_run?: boolean | stepes_runDefaultArgs<ExtArgs>
    reseve_email_validator?: boolean | working_step_validator$reseve_email_validatorArgs<ExtArgs>
    _count?: boolean | Working_step_validatorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type working_step_validatorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stepes_run?: boolean | stepes_runDefaultArgs<ExtArgs>
  }
  export type working_step_validatorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stepes_run?: boolean | stepes_runDefaultArgs<ExtArgs>
  }

  export type $working_step_validatorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "working_step_validator"
    objects: {
      stepes_run: Prisma.$stepes_runPayload<ExtArgs>
      reseve_email_validator: Prisma.$reseve_email_validatorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      stepes_run_id: number
      email: string | null
      message_id: string | null
      index: number
      status: $Enums.step_validation_status
      create_at: Date
      update_at: Date
    }, ExtArgs["result"]["working_step_validator"]>
    composites: {}
  }

  type working_step_validatorGetPayload<S extends boolean | null | undefined | working_step_validatorDefaultArgs> = $Result.GetResult<Prisma.$working_step_validatorPayload, S>

  type working_step_validatorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<working_step_validatorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Working_step_validatorCountAggregateInputType | true
    }

  export interface working_step_validatorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['working_step_validator'], meta: { name: 'working_step_validator' } }
    /**
     * Find zero or one Working_step_validator that matches the filter.
     * @param {working_step_validatorFindUniqueArgs} args - Arguments to find a Working_step_validator
     * @example
     * // Get one Working_step_validator
     * const working_step_validator = await prisma.working_step_validator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends working_step_validatorFindUniqueArgs>(args: SelectSubset<T, working_step_validatorFindUniqueArgs<ExtArgs>>): Prisma__working_step_validatorClient<$Result.GetResult<Prisma.$working_step_validatorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Working_step_validator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {working_step_validatorFindUniqueOrThrowArgs} args - Arguments to find a Working_step_validator
     * @example
     * // Get one Working_step_validator
     * const working_step_validator = await prisma.working_step_validator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends working_step_validatorFindUniqueOrThrowArgs>(args: SelectSubset<T, working_step_validatorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__working_step_validatorClient<$Result.GetResult<Prisma.$working_step_validatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Working_step_validator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {working_step_validatorFindFirstArgs} args - Arguments to find a Working_step_validator
     * @example
     * // Get one Working_step_validator
     * const working_step_validator = await prisma.working_step_validator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends working_step_validatorFindFirstArgs>(args?: SelectSubset<T, working_step_validatorFindFirstArgs<ExtArgs>>): Prisma__working_step_validatorClient<$Result.GetResult<Prisma.$working_step_validatorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Working_step_validator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {working_step_validatorFindFirstOrThrowArgs} args - Arguments to find a Working_step_validator
     * @example
     * // Get one Working_step_validator
     * const working_step_validator = await prisma.working_step_validator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends working_step_validatorFindFirstOrThrowArgs>(args?: SelectSubset<T, working_step_validatorFindFirstOrThrowArgs<ExtArgs>>): Prisma__working_step_validatorClient<$Result.GetResult<Prisma.$working_step_validatorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Working_step_validators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {working_step_validatorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Working_step_validators
     * const working_step_validators = await prisma.working_step_validator.findMany()
     * 
     * // Get first 10 Working_step_validators
     * const working_step_validators = await prisma.working_step_validator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const working_step_validatorWithIdOnly = await prisma.working_step_validator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends working_step_validatorFindManyArgs>(args?: SelectSubset<T, working_step_validatorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$working_step_validatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Working_step_validator.
     * @param {working_step_validatorCreateArgs} args - Arguments to create a Working_step_validator.
     * @example
     * // Create one Working_step_validator
     * const Working_step_validator = await prisma.working_step_validator.create({
     *   data: {
     *     // ... data to create a Working_step_validator
     *   }
     * })
     * 
     */
    create<T extends working_step_validatorCreateArgs>(args: SelectSubset<T, working_step_validatorCreateArgs<ExtArgs>>): Prisma__working_step_validatorClient<$Result.GetResult<Prisma.$working_step_validatorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Working_step_validators.
     * @param {working_step_validatorCreateManyArgs} args - Arguments to create many Working_step_validators.
     * @example
     * // Create many Working_step_validators
     * const working_step_validator = await prisma.working_step_validator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends working_step_validatorCreateManyArgs>(args?: SelectSubset<T, working_step_validatorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Working_step_validators and returns the data saved in the database.
     * @param {working_step_validatorCreateManyAndReturnArgs} args - Arguments to create many Working_step_validators.
     * @example
     * // Create many Working_step_validators
     * const working_step_validator = await prisma.working_step_validator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Working_step_validators and only return the `id`
     * const working_step_validatorWithIdOnly = await prisma.working_step_validator.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends working_step_validatorCreateManyAndReturnArgs>(args?: SelectSubset<T, working_step_validatorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$working_step_validatorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Working_step_validator.
     * @param {working_step_validatorDeleteArgs} args - Arguments to delete one Working_step_validator.
     * @example
     * // Delete one Working_step_validator
     * const Working_step_validator = await prisma.working_step_validator.delete({
     *   where: {
     *     // ... filter to delete one Working_step_validator
     *   }
     * })
     * 
     */
    delete<T extends working_step_validatorDeleteArgs>(args: SelectSubset<T, working_step_validatorDeleteArgs<ExtArgs>>): Prisma__working_step_validatorClient<$Result.GetResult<Prisma.$working_step_validatorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Working_step_validator.
     * @param {working_step_validatorUpdateArgs} args - Arguments to update one Working_step_validator.
     * @example
     * // Update one Working_step_validator
     * const working_step_validator = await prisma.working_step_validator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends working_step_validatorUpdateArgs>(args: SelectSubset<T, working_step_validatorUpdateArgs<ExtArgs>>): Prisma__working_step_validatorClient<$Result.GetResult<Prisma.$working_step_validatorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Working_step_validators.
     * @param {working_step_validatorDeleteManyArgs} args - Arguments to filter Working_step_validators to delete.
     * @example
     * // Delete a few Working_step_validators
     * const { count } = await prisma.working_step_validator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends working_step_validatorDeleteManyArgs>(args?: SelectSubset<T, working_step_validatorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Working_step_validators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {working_step_validatorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Working_step_validators
     * const working_step_validator = await prisma.working_step_validator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends working_step_validatorUpdateManyArgs>(args: SelectSubset<T, working_step_validatorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Working_step_validators and returns the data updated in the database.
     * @param {working_step_validatorUpdateManyAndReturnArgs} args - Arguments to update many Working_step_validators.
     * @example
     * // Update many Working_step_validators
     * const working_step_validator = await prisma.working_step_validator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Working_step_validators and only return the `id`
     * const working_step_validatorWithIdOnly = await prisma.working_step_validator.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends working_step_validatorUpdateManyAndReturnArgs>(args: SelectSubset<T, working_step_validatorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$working_step_validatorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Working_step_validator.
     * @param {working_step_validatorUpsertArgs} args - Arguments to update or create a Working_step_validator.
     * @example
     * // Update or create a Working_step_validator
     * const working_step_validator = await prisma.working_step_validator.upsert({
     *   create: {
     *     // ... data to create a Working_step_validator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Working_step_validator we want to update
     *   }
     * })
     */
    upsert<T extends working_step_validatorUpsertArgs>(args: SelectSubset<T, working_step_validatorUpsertArgs<ExtArgs>>): Prisma__working_step_validatorClient<$Result.GetResult<Prisma.$working_step_validatorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Working_step_validators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {working_step_validatorCountArgs} args - Arguments to filter Working_step_validators to count.
     * @example
     * // Count the number of Working_step_validators
     * const count = await prisma.working_step_validator.count({
     *   where: {
     *     // ... the filter for the Working_step_validators we want to count
     *   }
     * })
    **/
    count<T extends working_step_validatorCountArgs>(
      args?: Subset<T, working_step_validatorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Working_step_validatorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Working_step_validator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Working_step_validatorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Working_step_validatorAggregateArgs>(args: Subset<T, Working_step_validatorAggregateArgs>): Prisma.PrismaPromise<GetWorking_step_validatorAggregateType<T>>

    /**
     * Group by Working_step_validator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {working_step_validatorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends working_step_validatorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: working_step_validatorGroupByArgs['orderBy'] }
        : { orderBy?: working_step_validatorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, working_step_validatorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorking_step_validatorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the working_step_validator model
   */
  readonly fields: working_step_validatorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for working_step_validator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__working_step_validatorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stepes_run<T extends stepes_runDefaultArgs<ExtArgs> = {}>(args?: Subset<T, stepes_runDefaultArgs<ExtArgs>>): Prisma__stepes_runClient<$Result.GetResult<Prisma.$stepes_runPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reseve_email_validator<T extends working_step_validator$reseve_email_validatorArgs<ExtArgs> = {}>(args?: Subset<T, working_step_validator$reseve_email_validatorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reseve_email_validatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the working_step_validator model
   */
  interface working_step_validatorFieldRefs {
    readonly id: FieldRef<"working_step_validator", 'Int'>
    readonly stepes_run_id: FieldRef<"working_step_validator", 'Int'>
    readonly email: FieldRef<"working_step_validator", 'String'>
    readonly message_id: FieldRef<"working_step_validator", 'String'>
    readonly index: FieldRef<"working_step_validator", 'Int'>
    readonly status: FieldRef<"working_step_validator", 'step_validation_status'>
    readonly create_at: FieldRef<"working_step_validator", 'DateTime'>
    readonly update_at: FieldRef<"working_step_validator", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * working_step_validator findUnique
   */
  export type working_step_validatorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the working_step_validator
     */
    select?: working_step_validatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the working_step_validator
     */
    omit?: working_step_validatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: working_step_validatorInclude<ExtArgs> | null
    /**
     * Filter, which working_step_validator to fetch.
     */
    where: working_step_validatorWhereUniqueInput
  }

  /**
   * working_step_validator findUniqueOrThrow
   */
  export type working_step_validatorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the working_step_validator
     */
    select?: working_step_validatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the working_step_validator
     */
    omit?: working_step_validatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: working_step_validatorInclude<ExtArgs> | null
    /**
     * Filter, which working_step_validator to fetch.
     */
    where: working_step_validatorWhereUniqueInput
  }

  /**
   * working_step_validator findFirst
   */
  export type working_step_validatorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the working_step_validator
     */
    select?: working_step_validatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the working_step_validator
     */
    omit?: working_step_validatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: working_step_validatorInclude<ExtArgs> | null
    /**
     * Filter, which working_step_validator to fetch.
     */
    where?: working_step_validatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of working_step_validators to fetch.
     */
    orderBy?: working_step_validatorOrderByWithRelationInput | working_step_validatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for working_step_validators.
     */
    cursor?: working_step_validatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` working_step_validators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` working_step_validators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of working_step_validators.
     */
    distinct?: Working_step_validatorScalarFieldEnum | Working_step_validatorScalarFieldEnum[]
  }

  /**
   * working_step_validator findFirstOrThrow
   */
  export type working_step_validatorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the working_step_validator
     */
    select?: working_step_validatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the working_step_validator
     */
    omit?: working_step_validatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: working_step_validatorInclude<ExtArgs> | null
    /**
     * Filter, which working_step_validator to fetch.
     */
    where?: working_step_validatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of working_step_validators to fetch.
     */
    orderBy?: working_step_validatorOrderByWithRelationInput | working_step_validatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for working_step_validators.
     */
    cursor?: working_step_validatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` working_step_validators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` working_step_validators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of working_step_validators.
     */
    distinct?: Working_step_validatorScalarFieldEnum | Working_step_validatorScalarFieldEnum[]
  }

  /**
   * working_step_validator findMany
   */
  export type working_step_validatorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the working_step_validator
     */
    select?: working_step_validatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the working_step_validator
     */
    omit?: working_step_validatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: working_step_validatorInclude<ExtArgs> | null
    /**
     * Filter, which working_step_validators to fetch.
     */
    where?: working_step_validatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of working_step_validators to fetch.
     */
    orderBy?: working_step_validatorOrderByWithRelationInput | working_step_validatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing working_step_validators.
     */
    cursor?: working_step_validatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` working_step_validators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` working_step_validators.
     */
    skip?: number
    distinct?: Working_step_validatorScalarFieldEnum | Working_step_validatorScalarFieldEnum[]
  }

  /**
   * working_step_validator create
   */
  export type working_step_validatorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the working_step_validator
     */
    select?: working_step_validatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the working_step_validator
     */
    omit?: working_step_validatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: working_step_validatorInclude<ExtArgs> | null
    /**
     * The data needed to create a working_step_validator.
     */
    data: XOR<working_step_validatorCreateInput, working_step_validatorUncheckedCreateInput>
  }

  /**
   * working_step_validator createMany
   */
  export type working_step_validatorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many working_step_validators.
     */
    data: working_step_validatorCreateManyInput | working_step_validatorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * working_step_validator createManyAndReturn
   */
  export type working_step_validatorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the working_step_validator
     */
    select?: working_step_validatorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the working_step_validator
     */
    omit?: working_step_validatorOmit<ExtArgs> | null
    /**
     * The data used to create many working_step_validators.
     */
    data: working_step_validatorCreateManyInput | working_step_validatorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: working_step_validatorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * working_step_validator update
   */
  export type working_step_validatorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the working_step_validator
     */
    select?: working_step_validatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the working_step_validator
     */
    omit?: working_step_validatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: working_step_validatorInclude<ExtArgs> | null
    /**
     * The data needed to update a working_step_validator.
     */
    data: XOR<working_step_validatorUpdateInput, working_step_validatorUncheckedUpdateInput>
    /**
     * Choose, which working_step_validator to update.
     */
    where: working_step_validatorWhereUniqueInput
  }

  /**
   * working_step_validator updateMany
   */
  export type working_step_validatorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update working_step_validators.
     */
    data: XOR<working_step_validatorUpdateManyMutationInput, working_step_validatorUncheckedUpdateManyInput>
    /**
     * Filter which working_step_validators to update
     */
    where?: working_step_validatorWhereInput
    /**
     * Limit how many working_step_validators to update.
     */
    limit?: number
  }

  /**
   * working_step_validator updateManyAndReturn
   */
  export type working_step_validatorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the working_step_validator
     */
    select?: working_step_validatorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the working_step_validator
     */
    omit?: working_step_validatorOmit<ExtArgs> | null
    /**
     * The data used to update working_step_validators.
     */
    data: XOR<working_step_validatorUpdateManyMutationInput, working_step_validatorUncheckedUpdateManyInput>
    /**
     * Filter which working_step_validators to update
     */
    where?: working_step_validatorWhereInput
    /**
     * Limit how many working_step_validators to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: working_step_validatorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * working_step_validator upsert
   */
  export type working_step_validatorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the working_step_validator
     */
    select?: working_step_validatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the working_step_validator
     */
    omit?: working_step_validatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: working_step_validatorInclude<ExtArgs> | null
    /**
     * The filter to search for the working_step_validator to update in case it exists.
     */
    where: working_step_validatorWhereUniqueInput
    /**
     * In case the working_step_validator found by the `where` argument doesn't exist, create a new working_step_validator with this data.
     */
    create: XOR<working_step_validatorCreateInput, working_step_validatorUncheckedCreateInput>
    /**
     * In case the working_step_validator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<working_step_validatorUpdateInput, working_step_validatorUncheckedUpdateInput>
  }

  /**
   * working_step_validator delete
   */
  export type working_step_validatorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the working_step_validator
     */
    select?: working_step_validatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the working_step_validator
     */
    omit?: working_step_validatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: working_step_validatorInclude<ExtArgs> | null
    /**
     * Filter which working_step_validator to delete.
     */
    where: working_step_validatorWhereUniqueInput
  }

  /**
   * working_step_validator deleteMany
   */
  export type working_step_validatorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which working_step_validators to delete
     */
    where?: working_step_validatorWhereInput
    /**
     * Limit how many working_step_validators to delete.
     */
    limit?: number
  }

  /**
   * working_step_validator.reseve_email_validator
   */
  export type working_step_validator$reseve_email_validatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reseve_email_validator
     */
    select?: reseve_email_validatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reseve_email_validator
     */
    omit?: reseve_email_validatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reseve_email_validatorInclude<ExtArgs> | null
    where?: reseve_email_validatorWhereInput
    orderBy?: reseve_email_validatorOrderByWithRelationInput | reseve_email_validatorOrderByWithRelationInput[]
    cursor?: reseve_email_validatorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Reseve_email_validatorScalarFieldEnum | Reseve_email_validatorScalarFieldEnum[]
  }

  /**
   * working_step_validator without action
   */
  export type working_step_validatorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the working_step_validator
     */
    select?: working_step_validatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the working_step_validator
     */
    omit?: working_step_validatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: working_step_validatorInclude<ExtArgs> | null
  }


  /**
   * Model reseve_email_validator
   */

  export type AggregateReseve_email_validator = {
    _count: Reseve_email_validatorCountAggregateOutputType | null
    _avg: Reseve_email_validatorAvgAggregateOutputType | null
    _sum: Reseve_email_validatorSumAggregateOutputType | null
    _min: Reseve_email_validatorMinAggregateOutputType | null
    _max: Reseve_email_validatorMaxAggregateOutputType | null
  }

  export type Reseve_email_validatorAvgAggregateOutputType = {
    id: number | null
    working_step_validator_id: number | null
  }

  export type Reseve_email_validatorSumAggregateOutputType = {
    id: number | null
    working_step_validator_id: number | null
  }

  export type Reseve_email_validatorMinAggregateOutputType = {
    id: number | null
    working_step_validator_id: number | null
    status: $Enums.working_status | null
    create_at: Date | null
    update_at: Date | null
  }

  export type Reseve_email_validatorMaxAggregateOutputType = {
    id: number | null
    working_step_validator_id: number | null
    status: $Enums.working_status | null
    create_at: Date | null
    update_at: Date | null
  }

  export type Reseve_email_validatorCountAggregateOutputType = {
    id: number
    working_step_validator_id: number
    status: number
    create_at: number
    update_at: number
    _all: number
  }


  export type Reseve_email_validatorAvgAggregateInputType = {
    id?: true
    working_step_validator_id?: true
  }

  export type Reseve_email_validatorSumAggregateInputType = {
    id?: true
    working_step_validator_id?: true
  }

  export type Reseve_email_validatorMinAggregateInputType = {
    id?: true
    working_step_validator_id?: true
    status?: true
    create_at?: true
    update_at?: true
  }

  export type Reseve_email_validatorMaxAggregateInputType = {
    id?: true
    working_step_validator_id?: true
    status?: true
    create_at?: true
    update_at?: true
  }

  export type Reseve_email_validatorCountAggregateInputType = {
    id?: true
    working_step_validator_id?: true
    status?: true
    create_at?: true
    update_at?: true
    _all?: true
  }

  export type Reseve_email_validatorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reseve_email_validator to aggregate.
     */
    where?: reseve_email_validatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reseve_email_validators to fetch.
     */
    orderBy?: reseve_email_validatorOrderByWithRelationInput | reseve_email_validatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reseve_email_validatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reseve_email_validators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reseve_email_validators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reseve_email_validators
    **/
    _count?: true | Reseve_email_validatorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Reseve_email_validatorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Reseve_email_validatorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Reseve_email_validatorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Reseve_email_validatorMaxAggregateInputType
  }

  export type GetReseve_email_validatorAggregateType<T extends Reseve_email_validatorAggregateArgs> = {
        [P in keyof T & keyof AggregateReseve_email_validator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReseve_email_validator[P]>
      : GetScalarType<T[P], AggregateReseve_email_validator[P]>
  }




  export type reseve_email_validatorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reseve_email_validatorWhereInput
    orderBy?: reseve_email_validatorOrderByWithAggregationInput | reseve_email_validatorOrderByWithAggregationInput[]
    by: Reseve_email_validatorScalarFieldEnum[] | Reseve_email_validatorScalarFieldEnum
    having?: reseve_email_validatorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Reseve_email_validatorCountAggregateInputType | true
    _avg?: Reseve_email_validatorAvgAggregateInputType
    _sum?: Reseve_email_validatorSumAggregateInputType
    _min?: Reseve_email_validatorMinAggregateInputType
    _max?: Reseve_email_validatorMaxAggregateInputType
  }

  export type Reseve_email_validatorGroupByOutputType = {
    id: number
    working_step_validator_id: number
    status: $Enums.working_status
    create_at: Date
    update_at: Date
    _count: Reseve_email_validatorCountAggregateOutputType | null
    _avg: Reseve_email_validatorAvgAggregateOutputType | null
    _sum: Reseve_email_validatorSumAggregateOutputType | null
    _min: Reseve_email_validatorMinAggregateOutputType | null
    _max: Reseve_email_validatorMaxAggregateOutputType | null
  }

  type GetReseve_email_validatorGroupByPayload<T extends reseve_email_validatorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Reseve_email_validatorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Reseve_email_validatorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Reseve_email_validatorGroupByOutputType[P]>
            : GetScalarType<T[P], Reseve_email_validatorGroupByOutputType[P]>
        }
      >
    >


  export type reseve_email_validatorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    working_step_validator_id?: boolean
    status?: boolean
    create_at?: boolean
    update_at?: boolean
    working_step_validator?: boolean | working_step_validatorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reseve_email_validator"]>

  export type reseve_email_validatorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    working_step_validator_id?: boolean
    status?: boolean
    create_at?: boolean
    update_at?: boolean
    working_step_validator?: boolean | working_step_validatorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reseve_email_validator"]>

  export type reseve_email_validatorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    working_step_validator_id?: boolean
    status?: boolean
    create_at?: boolean
    update_at?: boolean
    working_step_validator?: boolean | working_step_validatorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reseve_email_validator"]>

  export type reseve_email_validatorSelectScalar = {
    id?: boolean
    working_step_validator_id?: boolean
    status?: boolean
    create_at?: boolean
    update_at?: boolean
  }

  export type reseve_email_validatorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "working_step_validator_id" | "status" | "create_at" | "update_at", ExtArgs["result"]["reseve_email_validator"]>
  export type reseve_email_validatorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    working_step_validator?: boolean | working_step_validatorDefaultArgs<ExtArgs>
  }
  export type reseve_email_validatorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    working_step_validator?: boolean | working_step_validatorDefaultArgs<ExtArgs>
  }
  export type reseve_email_validatorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    working_step_validator?: boolean | working_step_validatorDefaultArgs<ExtArgs>
  }

  export type $reseve_email_validatorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reseve_email_validator"
    objects: {
      working_step_validator: Prisma.$working_step_validatorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      working_step_validator_id: number
      status: $Enums.working_status
      create_at: Date
      update_at: Date
    }, ExtArgs["result"]["reseve_email_validator"]>
    composites: {}
  }

  type reseve_email_validatorGetPayload<S extends boolean | null | undefined | reseve_email_validatorDefaultArgs> = $Result.GetResult<Prisma.$reseve_email_validatorPayload, S>

  type reseve_email_validatorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reseve_email_validatorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Reseve_email_validatorCountAggregateInputType | true
    }

  export interface reseve_email_validatorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reseve_email_validator'], meta: { name: 'reseve_email_validator' } }
    /**
     * Find zero or one Reseve_email_validator that matches the filter.
     * @param {reseve_email_validatorFindUniqueArgs} args - Arguments to find a Reseve_email_validator
     * @example
     * // Get one Reseve_email_validator
     * const reseve_email_validator = await prisma.reseve_email_validator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reseve_email_validatorFindUniqueArgs>(args: SelectSubset<T, reseve_email_validatorFindUniqueArgs<ExtArgs>>): Prisma__reseve_email_validatorClient<$Result.GetResult<Prisma.$reseve_email_validatorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reseve_email_validator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reseve_email_validatorFindUniqueOrThrowArgs} args - Arguments to find a Reseve_email_validator
     * @example
     * // Get one Reseve_email_validator
     * const reseve_email_validator = await prisma.reseve_email_validator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reseve_email_validatorFindUniqueOrThrowArgs>(args: SelectSubset<T, reseve_email_validatorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reseve_email_validatorClient<$Result.GetResult<Prisma.$reseve_email_validatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reseve_email_validator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reseve_email_validatorFindFirstArgs} args - Arguments to find a Reseve_email_validator
     * @example
     * // Get one Reseve_email_validator
     * const reseve_email_validator = await prisma.reseve_email_validator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reseve_email_validatorFindFirstArgs>(args?: SelectSubset<T, reseve_email_validatorFindFirstArgs<ExtArgs>>): Prisma__reseve_email_validatorClient<$Result.GetResult<Prisma.$reseve_email_validatorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reseve_email_validator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reseve_email_validatorFindFirstOrThrowArgs} args - Arguments to find a Reseve_email_validator
     * @example
     * // Get one Reseve_email_validator
     * const reseve_email_validator = await prisma.reseve_email_validator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reseve_email_validatorFindFirstOrThrowArgs>(args?: SelectSubset<T, reseve_email_validatorFindFirstOrThrowArgs<ExtArgs>>): Prisma__reseve_email_validatorClient<$Result.GetResult<Prisma.$reseve_email_validatorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reseve_email_validators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reseve_email_validatorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reseve_email_validators
     * const reseve_email_validators = await prisma.reseve_email_validator.findMany()
     * 
     * // Get first 10 Reseve_email_validators
     * const reseve_email_validators = await prisma.reseve_email_validator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reseve_email_validatorWithIdOnly = await prisma.reseve_email_validator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reseve_email_validatorFindManyArgs>(args?: SelectSubset<T, reseve_email_validatorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reseve_email_validatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reseve_email_validator.
     * @param {reseve_email_validatorCreateArgs} args - Arguments to create a Reseve_email_validator.
     * @example
     * // Create one Reseve_email_validator
     * const Reseve_email_validator = await prisma.reseve_email_validator.create({
     *   data: {
     *     // ... data to create a Reseve_email_validator
     *   }
     * })
     * 
     */
    create<T extends reseve_email_validatorCreateArgs>(args: SelectSubset<T, reseve_email_validatorCreateArgs<ExtArgs>>): Prisma__reseve_email_validatorClient<$Result.GetResult<Prisma.$reseve_email_validatorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reseve_email_validators.
     * @param {reseve_email_validatorCreateManyArgs} args - Arguments to create many Reseve_email_validators.
     * @example
     * // Create many Reseve_email_validators
     * const reseve_email_validator = await prisma.reseve_email_validator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reseve_email_validatorCreateManyArgs>(args?: SelectSubset<T, reseve_email_validatorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reseve_email_validators and returns the data saved in the database.
     * @param {reseve_email_validatorCreateManyAndReturnArgs} args - Arguments to create many Reseve_email_validators.
     * @example
     * // Create many Reseve_email_validators
     * const reseve_email_validator = await prisma.reseve_email_validator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reseve_email_validators and only return the `id`
     * const reseve_email_validatorWithIdOnly = await prisma.reseve_email_validator.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reseve_email_validatorCreateManyAndReturnArgs>(args?: SelectSubset<T, reseve_email_validatorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reseve_email_validatorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reseve_email_validator.
     * @param {reseve_email_validatorDeleteArgs} args - Arguments to delete one Reseve_email_validator.
     * @example
     * // Delete one Reseve_email_validator
     * const Reseve_email_validator = await prisma.reseve_email_validator.delete({
     *   where: {
     *     // ... filter to delete one Reseve_email_validator
     *   }
     * })
     * 
     */
    delete<T extends reseve_email_validatorDeleteArgs>(args: SelectSubset<T, reseve_email_validatorDeleteArgs<ExtArgs>>): Prisma__reseve_email_validatorClient<$Result.GetResult<Prisma.$reseve_email_validatorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reseve_email_validator.
     * @param {reseve_email_validatorUpdateArgs} args - Arguments to update one Reseve_email_validator.
     * @example
     * // Update one Reseve_email_validator
     * const reseve_email_validator = await prisma.reseve_email_validator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reseve_email_validatorUpdateArgs>(args: SelectSubset<T, reseve_email_validatorUpdateArgs<ExtArgs>>): Prisma__reseve_email_validatorClient<$Result.GetResult<Prisma.$reseve_email_validatorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reseve_email_validators.
     * @param {reseve_email_validatorDeleteManyArgs} args - Arguments to filter Reseve_email_validators to delete.
     * @example
     * // Delete a few Reseve_email_validators
     * const { count } = await prisma.reseve_email_validator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reseve_email_validatorDeleteManyArgs>(args?: SelectSubset<T, reseve_email_validatorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reseve_email_validators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reseve_email_validatorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reseve_email_validators
     * const reseve_email_validator = await prisma.reseve_email_validator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reseve_email_validatorUpdateManyArgs>(args: SelectSubset<T, reseve_email_validatorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reseve_email_validators and returns the data updated in the database.
     * @param {reseve_email_validatorUpdateManyAndReturnArgs} args - Arguments to update many Reseve_email_validators.
     * @example
     * // Update many Reseve_email_validators
     * const reseve_email_validator = await prisma.reseve_email_validator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reseve_email_validators and only return the `id`
     * const reseve_email_validatorWithIdOnly = await prisma.reseve_email_validator.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends reseve_email_validatorUpdateManyAndReturnArgs>(args: SelectSubset<T, reseve_email_validatorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reseve_email_validatorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reseve_email_validator.
     * @param {reseve_email_validatorUpsertArgs} args - Arguments to update or create a Reseve_email_validator.
     * @example
     * // Update or create a Reseve_email_validator
     * const reseve_email_validator = await prisma.reseve_email_validator.upsert({
     *   create: {
     *     // ... data to create a Reseve_email_validator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reseve_email_validator we want to update
     *   }
     * })
     */
    upsert<T extends reseve_email_validatorUpsertArgs>(args: SelectSubset<T, reseve_email_validatorUpsertArgs<ExtArgs>>): Prisma__reseve_email_validatorClient<$Result.GetResult<Prisma.$reseve_email_validatorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reseve_email_validators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reseve_email_validatorCountArgs} args - Arguments to filter Reseve_email_validators to count.
     * @example
     * // Count the number of Reseve_email_validators
     * const count = await prisma.reseve_email_validator.count({
     *   where: {
     *     // ... the filter for the Reseve_email_validators we want to count
     *   }
     * })
    **/
    count<T extends reseve_email_validatorCountArgs>(
      args?: Subset<T, reseve_email_validatorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Reseve_email_validatorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reseve_email_validator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Reseve_email_validatorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Reseve_email_validatorAggregateArgs>(args: Subset<T, Reseve_email_validatorAggregateArgs>): Prisma.PrismaPromise<GetReseve_email_validatorAggregateType<T>>

    /**
     * Group by Reseve_email_validator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reseve_email_validatorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reseve_email_validatorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reseve_email_validatorGroupByArgs['orderBy'] }
        : { orderBy?: reseve_email_validatorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reseve_email_validatorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReseve_email_validatorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reseve_email_validator model
   */
  readonly fields: reseve_email_validatorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reseve_email_validator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reseve_email_validatorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    working_step_validator<T extends working_step_validatorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, working_step_validatorDefaultArgs<ExtArgs>>): Prisma__working_step_validatorClient<$Result.GetResult<Prisma.$working_step_validatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the reseve_email_validator model
   */
  interface reseve_email_validatorFieldRefs {
    readonly id: FieldRef<"reseve_email_validator", 'Int'>
    readonly working_step_validator_id: FieldRef<"reseve_email_validator", 'Int'>
    readonly status: FieldRef<"reseve_email_validator", 'working_status'>
    readonly create_at: FieldRef<"reseve_email_validator", 'DateTime'>
    readonly update_at: FieldRef<"reseve_email_validator", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * reseve_email_validator findUnique
   */
  export type reseve_email_validatorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reseve_email_validator
     */
    select?: reseve_email_validatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reseve_email_validator
     */
    omit?: reseve_email_validatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reseve_email_validatorInclude<ExtArgs> | null
    /**
     * Filter, which reseve_email_validator to fetch.
     */
    where: reseve_email_validatorWhereUniqueInput
  }

  /**
   * reseve_email_validator findUniqueOrThrow
   */
  export type reseve_email_validatorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reseve_email_validator
     */
    select?: reseve_email_validatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reseve_email_validator
     */
    omit?: reseve_email_validatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reseve_email_validatorInclude<ExtArgs> | null
    /**
     * Filter, which reseve_email_validator to fetch.
     */
    where: reseve_email_validatorWhereUniqueInput
  }

  /**
   * reseve_email_validator findFirst
   */
  export type reseve_email_validatorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reseve_email_validator
     */
    select?: reseve_email_validatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reseve_email_validator
     */
    omit?: reseve_email_validatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reseve_email_validatorInclude<ExtArgs> | null
    /**
     * Filter, which reseve_email_validator to fetch.
     */
    where?: reseve_email_validatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reseve_email_validators to fetch.
     */
    orderBy?: reseve_email_validatorOrderByWithRelationInput | reseve_email_validatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reseve_email_validators.
     */
    cursor?: reseve_email_validatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reseve_email_validators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reseve_email_validators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reseve_email_validators.
     */
    distinct?: Reseve_email_validatorScalarFieldEnum | Reseve_email_validatorScalarFieldEnum[]
  }

  /**
   * reseve_email_validator findFirstOrThrow
   */
  export type reseve_email_validatorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reseve_email_validator
     */
    select?: reseve_email_validatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reseve_email_validator
     */
    omit?: reseve_email_validatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reseve_email_validatorInclude<ExtArgs> | null
    /**
     * Filter, which reseve_email_validator to fetch.
     */
    where?: reseve_email_validatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reseve_email_validators to fetch.
     */
    orderBy?: reseve_email_validatorOrderByWithRelationInput | reseve_email_validatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reseve_email_validators.
     */
    cursor?: reseve_email_validatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reseve_email_validators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reseve_email_validators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reseve_email_validators.
     */
    distinct?: Reseve_email_validatorScalarFieldEnum | Reseve_email_validatorScalarFieldEnum[]
  }

  /**
   * reseve_email_validator findMany
   */
  export type reseve_email_validatorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reseve_email_validator
     */
    select?: reseve_email_validatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reseve_email_validator
     */
    omit?: reseve_email_validatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reseve_email_validatorInclude<ExtArgs> | null
    /**
     * Filter, which reseve_email_validators to fetch.
     */
    where?: reseve_email_validatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reseve_email_validators to fetch.
     */
    orderBy?: reseve_email_validatorOrderByWithRelationInput | reseve_email_validatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reseve_email_validators.
     */
    cursor?: reseve_email_validatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reseve_email_validators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reseve_email_validators.
     */
    skip?: number
    distinct?: Reseve_email_validatorScalarFieldEnum | Reseve_email_validatorScalarFieldEnum[]
  }

  /**
   * reseve_email_validator create
   */
  export type reseve_email_validatorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reseve_email_validator
     */
    select?: reseve_email_validatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reseve_email_validator
     */
    omit?: reseve_email_validatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reseve_email_validatorInclude<ExtArgs> | null
    /**
     * The data needed to create a reseve_email_validator.
     */
    data: XOR<reseve_email_validatorCreateInput, reseve_email_validatorUncheckedCreateInput>
  }

  /**
   * reseve_email_validator createMany
   */
  export type reseve_email_validatorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reseve_email_validators.
     */
    data: reseve_email_validatorCreateManyInput | reseve_email_validatorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reseve_email_validator createManyAndReturn
   */
  export type reseve_email_validatorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reseve_email_validator
     */
    select?: reseve_email_validatorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reseve_email_validator
     */
    omit?: reseve_email_validatorOmit<ExtArgs> | null
    /**
     * The data used to create many reseve_email_validators.
     */
    data: reseve_email_validatorCreateManyInput | reseve_email_validatorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reseve_email_validatorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * reseve_email_validator update
   */
  export type reseve_email_validatorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reseve_email_validator
     */
    select?: reseve_email_validatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reseve_email_validator
     */
    omit?: reseve_email_validatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reseve_email_validatorInclude<ExtArgs> | null
    /**
     * The data needed to update a reseve_email_validator.
     */
    data: XOR<reseve_email_validatorUpdateInput, reseve_email_validatorUncheckedUpdateInput>
    /**
     * Choose, which reseve_email_validator to update.
     */
    where: reseve_email_validatorWhereUniqueInput
  }

  /**
   * reseve_email_validator updateMany
   */
  export type reseve_email_validatorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reseve_email_validators.
     */
    data: XOR<reseve_email_validatorUpdateManyMutationInput, reseve_email_validatorUncheckedUpdateManyInput>
    /**
     * Filter which reseve_email_validators to update
     */
    where?: reseve_email_validatorWhereInput
    /**
     * Limit how many reseve_email_validators to update.
     */
    limit?: number
  }

  /**
   * reseve_email_validator updateManyAndReturn
   */
  export type reseve_email_validatorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reseve_email_validator
     */
    select?: reseve_email_validatorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reseve_email_validator
     */
    omit?: reseve_email_validatorOmit<ExtArgs> | null
    /**
     * The data used to update reseve_email_validators.
     */
    data: XOR<reseve_email_validatorUpdateManyMutationInput, reseve_email_validatorUncheckedUpdateManyInput>
    /**
     * Filter which reseve_email_validators to update
     */
    where?: reseve_email_validatorWhereInput
    /**
     * Limit how many reseve_email_validators to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reseve_email_validatorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * reseve_email_validator upsert
   */
  export type reseve_email_validatorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reseve_email_validator
     */
    select?: reseve_email_validatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reseve_email_validator
     */
    omit?: reseve_email_validatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reseve_email_validatorInclude<ExtArgs> | null
    /**
     * The filter to search for the reseve_email_validator to update in case it exists.
     */
    where: reseve_email_validatorWhereUniqueInput
    /**
     * In case the reseve_email_validator found by the `where` argument doesn't exist, create a new reseve_email_validator with this data.
     */
    create: XOR<reseve_email_validatorCreateInput, reseve_email_validatorUncheckedCreateInput>
    /**
     * In case the reseve_email_validator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reseve_email_validatorUpdateInput, reseve_email_validatorUncheckedUpdateInput>
  }

  /**
   * reseve_email_validator delete
   */
  export type reseve_email_validatorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reseve_email_validator
     */
    select?: reseve_email_validatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reseve_email_validator
     */
    omit?: reseve_email_validatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reseve_email_validatorInclude<ExtArgs> | null
    /**
     * Filter which reseve_email_validator to delete.
     */
    where: reseve_email_validatorWhereUniqueInput
  }

  /**
   * reseve_email_validator deleteMany
   */
  export type reseve_email_validatorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reseve_email_validators to delete
     */
    where?: reseve_email_validatorWhereInput
    /**
     * Limit how many reseve_email_validators to delete.
     */
    limit?: number
  }

  /**
   * reseve_email_validator without action
   */
  export type reseve_email_validatorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reseve_email_validator
     */
    select?: reseve_email_validatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reseve_email_validator
     */
    omit?: reseve_email_validatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reseve_email_validatorInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    is_active: 'is_active',
    create_at: 'create_at',
    update_at: 'update_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TypeofstepScalarFieldEnum: {
    id: 'id',
    name: 'name',
    app: 'app',
    work_type: 'work_type',
    meta_data: 'meta_data',
    image_url: 'image_url',
    create_at: 'create_at',
    update_at: 'update_at'
  };

  export type TypeofstepScalarFieldEnum = (typeof TypeofstepScalarFieldEnum)[keyof typeof TypeofstepScalarFieldEnum]


  export const WorkflowScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status',
    create_at: 'create_at',
    update_at: 'update_at'
  };

  export type WorkflowScalarFieldEnum = (typeof WorkflowScalarFieldEnum)[keyof typeof WorkflowScalarFieldEnum]


  export const StepScalarFieldEnum: {
    id: 'id',
    name: 'name',
    index: 'index',
    typeofstap_id: 'typeofstap_id',
    user_id: 'user_id',
    workflow_id: 'workflow_id',
    meta_data: 'meta_data',
    status: 'status',
    create_at: 'create_at',
    update_at: 'update_at'
  };

  export type StepScalarFieldEnum = (typeof StepScalarFieldEnum)[keyof typeof StepScalarFieldEnum]


  export const Stepes_runScalarFieldEnum: {
    id: 'id',
    meta_data: 'meta_data',
    status: 'status',
    step_id: 'step_id',
    workflow_id: 'workflow_id',
    create_at: 'create_at',
    update_at: 'update_at'
  };

  export type Stepes_runScalarFieldEnum = (typeof Stepes_runScalarFieldEnum)[keyof typeof Stepes_runScalarFieldEnum]


  export const Out_box_step_runScalarFieldEnum: {
    id: 'id',
    stepes_run_id: 'stepes_run_id',
    create_at: 'create_at',
    update_at: 'update_at'
  };

  export type Out_box_step_runScalarFieldEnum = (typeof Out_box_step_runScalarFieldEnum)[keyof typeof Out_box_step_runScalarFieldEnum]


  export const Working_step_validatorScalarFieldEnum: {
    id: 'id',
    stepes_run_id: 'stepes_run_id',
    email: 'email',
    message_id: 'message_id',
    index: 'index',
    status: 'status',
    create_at: 'create_at',
    update_at: 'update_at'
  };

  export type Working_step_validatorScalarFieldEnum = (typeof Working_step_validatorScalarFieldEnum)[keyof typeof Working_step_validatorScalarFieldEnum]


  export const Reseve_email_validatorScalarFieldEnum: {
    id: 'id',
    working_step_validator_id: 'working_step_validator_id',
    status: 'status',
    create_at: 'create_at',
    update_at: 'update_at'
  };

  export type Reseve_email_validatorScalarFieldEnum = (typeof Reseve_email_validatorScalarFieldEnum)[keyof typeof Reseve_email_validatorScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'work_type'
   */
  export type Enumwork_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'work_type'>
    


  /**
   * Reference to a field of type 'work_type[]'
   */
  export type ListEnumwork_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'work_type[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'status'
   */
  export type EnumstatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status'>
    


  /**
   * Reference to a field of type 'status[]'
   */
  export type ListEnumstatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status[]'>
    


  /**
   * Reference to a field of type 'working_status'
   */
  export type Enumworking_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'working_status'>
    


  /**
   * Reference to a field of type 'working_status[]'
   */
  export type ListEnumworking_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'working_status[]'>
    


  /**
   * Reference to a field of type 'step_validation_status'
   */
  export type Enumstep_validation_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'step_validation_status'>
    


  /**
   * Reference to a field of type 'step_validation_status[]'
   */
  export type ListEnumstep_validation_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'step_validation_status[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    name?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    is_active?: BoolFilter<"user"> | boolean
    create_at?: DateTimeFilter<"user"> | Date | string
    update_at?: DateTimeFilter<"user"> | Date | string
    stepes?: StepListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    is_active?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
    stepes?: stepOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    is_active?: BoolFilter<"user"> | boolean
    create_at?: DateTimeFilter<"user"> | Date | string
    update_at?: DateTimeFilter<"user"> | Date | string
    stepes?: StepListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    is_active?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    name?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    is_active?: BoolWithAggregatesFilter<"user"> | boolean
    create_at?: DateTimeWithAggregatesFilter<"user"> | Date | string
    update_at?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type typeofstepWhereInput = {
    AND?: typeofstepWhereInput | typeofstepWhereInput[]
    OR?: typeofstepWhereInput[]
    NOT?: typeofstepWhereInput | typeofstepWhereInput[]
    id?: IntFilter<"typeofstep"> | number
    name?: StringFilter<"typeofstep"> | string
    app?: StringFilter<"typeofstep"> | string
    work_type?: Enumwork_typeFilter<"typeofstep"> | $Enums.work_type
    meta_data?: JsonFilter<"typeofstep">
    image_url?: StringFilter<"typeofstep"> | string
    create_at?: DateTimeFilter<"typeofstep"> | Date | string
    update_at?: DateTimeFilter<"typeofstep"> | Date | string
    stepes?: StepListRelationFilter
  }

  export type typeofstepOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    app?: SortOrder
    work_type?: SortOrder
    meta_data?: SortOrder
    image_url?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
    stepes?: stepOrderByRelationAggregateInput
  }

  export type typeofstepWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    app?: string
    AND?: typeofstepWhereInput | typeofstepWhereInput[]
    OR?: typeofstepWhereInput[]
    NOT?: typeofstepWhereInput | typeofstepWhereInput[]
    work_type?: Enumwork_typeFilter<"typeofstep"> | $Enums.work_type
    meta_data?: JsonFilter<"typeofstep">
    image_url?: StringFilter<"typeofstep"> | string
    create_at?: DateTimeFilter<"typeofstep"> | Date | string
    update_at?: DateTimeFilter<"typeofstep"> | Date | string
    stepes?: StepListRelationFilter
  }, "id" | "name" | "app">

  export type typeofstepOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    app?: SortOrder
    work_type?: SortOrder
    meta_data?: SortOrder
    image_url?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
    _count?: typeofstepCountOrderByAggregateInput
    _avg?: typeofstepAvgOrderByAggregateInput
    _max?: typeofstepMaxOrderByAggregateInput
    _min?: typeofstepMinOrderByAggregateInput
    _sum?: typeofstepSumOrderByAggregateInput
  }

  export type typeofstepScalarWhereWithAggregatesInput = {
    AND?: typeofstepScalarWhereWithAggregatesInput | typeofstepScalarWhereWithAggregatesInput[]
    OR?: typeofstepScalarWhereWithAggregatesInput[]
    NOT?: typeofstepScalarWhereWithAggregatesInput | typeofstepScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"typeofstep"> | number
    name?: StringWithAggregatesFilter<"typeofstep"> | string
    app?: StringWithAggregatesFilter<"typeofstep"> | string
    work_type?: Enumwork_typeWithAggregatesFilter<"typeofstep"> | $Enums.work_type
    meta_data?: JsonWithAggregatesFilter<"typeofstep">
    image_url?: StringWithAggregatesFilter<"typeofstep"> | string
    create_at?: DateTimeWithAggregatesFilter<"typeofstep"> | Date | string
    update_at?: DateTimeWithAggregatesFilter<"typeofstep"> | Date | string
  }

  export type workflowWhereInput = {
    AND?: workflowWhereInput | workflowWhereInput[]
    OR?: workflowWhereInput[]
    NOT?: workflowWhereInput | workflowWhereInput[]
    id?: IntFilter<"workflow"> | number
    name?: StringFilter<"workflow"> | string
    status?: EnumstatusFilter<"workflow"> | $Enums.status
    create_at?: DateTimeFilter<"workflow"> | Date | string
    update_at?: DateTimeFilter<"workflow"> | Date | string
    stepes?: StepListRelationFilter
    stepes_runs?: Stepes_runListRelationFilter
  }

  export type workflowOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
    stepes?: stepOrderByRelationAggregateInput
    stepes_runs?: stepes_runOrderByRelationAggregateInput
  }

  export type workflowWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: workflowWhereInput | workflowWhereInput[]
    OR?: workflowWhereInput[]
    NOT?: workflowWhereInput | workflowWhereInput[]
    status?: EnumstatusFilter<"workflow"> | $Enums.status
    create_at?: DateTimeFilter<"workflow"> | Date | string
    update_at?: DateTimeFilter<"workflow"> | Date | string
    stepes?: StepListRelationFilter
    stepes_runs?: Stepes_runListRelationFilter
  }, "id" | "name">

  export type workflowOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
    _count?: workflowCountOrderByAggregateInput
    _avg?: workflowAvgOrderByAggregateInput
    _max?: workflowMaxOrderByAggregateInput
    _min?: workflowMinOrderByAggregateInput
    _sum?: workflowSumOrderByAggregateInput
  }

  export type workflowScalarWhereWithAggregatesInput = {
    AND?: workflowScalarWhereWithAggregatesInput | workflowScalarWhereWithAggregatesInput[]
    OR?: workflowScalarWhereWithAggregatesInput[]
    NOT?: workflowScalarWhereWithAggregatesInput | workflowScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"workflow"> | number
    name?: StringWithAggregatesFilter<"workflow"> | string
    status?: EnumstatusWithAggregatesFilter<"workflow"> | $Enums.status
    create_at?: DateTimeWithAggregatesFilter<"workflow"> | Date | string
    update_at?: DateTimeWithAggregatesFilter<"workflow"> | Date | string
  }

  export type stepWhereInput = {
    AND?: stepWhereInput | stepWhereInput[]
    OR?: stepWhereInput[]
    NOT?: stepWhereInput | stepWhereInput[]
    id?: IntFilter<"step"> | number
    name?: StringNullableFilter<"step"> | string | null
    index?: IntFilter<"step"> | number
    typeofstap_id?: IntFilter<"step"> | number
    user_id?: IntFilter<"step"> | number
    workflow_id?: IntFilter<"step"> | number
    meta_data?: JsonFilter<"step">
    status?: EnumstatusFilter<"step"> | $Enums.status
    create_at?: DateTimeFilter<"step"> | Date | string
    update_at?: DateTimeFilter<"step"> | Date | string
    typeofstep?: XOR<TypeofstepScalarRelationFilter, typeofstepWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    workflow?: XOR<WorkflowScalarRelationFilter, workflowWhereInput>
    stepes_runs?: Stepes_runListRelationFilter
  }

  export type stepOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    index?: SortOrder
    typeofstap_id?: SortOrder
    user_id?: SortOrder
    workflow_id?: SortOrder
    meta_data?: SortOrder
    status?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
    typeofstep?: typeofstepOrderByWithRelationInput
    user?: userOrderByWithRelationInput
    workflow?: workflowOrderByWithRelationInput
    stepes_runs?: stepes_runOrderByRelationAggregateInput
  }

  export type stepWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: stepWhereInput | stepWhereInput[]
    OR?: stepWhereInput[]
    NOT?: stepWhereInput | stepWhereInput[]
    name?: StringNullableFilter<"step"> | string | null
    index?: IntFilter<"step"> | number
    typeofstap_id?: IntFilter<"step"> | number
    user_id?: IntFilter<"step"> | number
    workflow_id?: IntFilter<"step"> | number
    meta_data?: JsonFilter<"step">
    status?: EnumstatusFilter<"step"> | $Enums.status
    create_at?: DateTimeFilter<"step"> | Date | string
    update_at?: DateTimeFilter<"step"> | Date | string
    typeofstep?: XOR<TypeofstepScalarRelationFilter, typeofstepWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    workflow?: XOR<WorkflowScalarRelationFilter, workflowWhereInput>
    stepes_runs?: Stepes_runListRelationFilter
  }, "id">

  export type stepOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    index?: SortOrder
    typeofstap_id?: SortOrder
    user_id?: SortOrder
    workflow_id?: SortOrder
    meta_data?: SortOrder
    status?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
    _count?: stepCountOrderByAggregateInput
    _avg?: stepAvgOrderByAggregateInput
    _max?: stepMaxOrderByAggregateInput
    _min?: stepMinOrderByAggregateInput
    _sum?: stepSumOrderByAggregateInput
  }

  export type stepScalarWhereWithAggregatesInput = {
    AND?: stepScalarWhereWithAggregatesInput | stepScalarWhereWithAggregatesInput[]
    OR?: stepScalarWhereWithAggregatesInput[]
    NOT?: stepScalarWhereWithAggregatesInput | stepScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"step"> | number
    name?: StringNullableWithAggregatesFilter<"step"> | string | null
    index?: IntWithAggregatesFilter<"step"> | number
    typeofstap_id?: IntWithAggregatesFilter<"step"> | number
    user_id?: IntWithAggregatesFilter<"step"> | number
    workflow_id?: IntWithAggregatesFilter<"step"> | number
    meta_data?: JsonWithAggregatesFilter<"step">
    status?: EnumstatusWithAggregatesFilter<"step"> | $Enums.status
    create_at?: DateTimeWithAggregatesFilter<"step"> | Date | string
    update_at?: DateTimeWithAggregatesFilter<"step"> | Date | string
  }

  export type stepes_runWhereInput = {
    AND?: stepes_runWhereInput | stepes_runWhereInput[]
    OR?: stepes_runWhereInput[]
    NOT?: stepes_runWhereInput | stepes_runWhereInput[]
    id?: IntFilter<"stepes_run"> | number
    meta_data?: JsonFilter<"stepes_run">
    status?: Enumworking_statusFilter<"stepes_run"> | $Enums.working_status
    step_id?: IntFilter<"stepes_run"> | number
    workflow_id?: IntFilter<"stepes_run"> | number
    create_at?: DateTimeFilter<"stepes_run"> | Date | string
    update_at?: DateTimeFilter<"stepes_run"> | Date | string
    step?: XOR<StepScalarRelationFilter, stepWhereInput>
    workflow?: XOR<WorkflowScalarRelationFilter, workflowWhereInput>
    out_box_step_run?: Out_box_step_runListRelationFilter
    working_step_validation?: Working_step_validatorListRelationFilter
  }

  export type stepes_runOrderByWithRelationInput = {
    id?: SortOrder
    meta_data?: SortOrder
    status?: SortOrder
    step_id?: SortOrder
    workflow_id?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
    step?: stepOrderByWithRelationInput
    workflow?: workflowOrderByWithRelationInput
    out_box_step_run?: out_box_step_runOrderByRelationAggregateInput
    working_step_validation?: working_step_validatorOrderByRelationAggregateInput
  }

  export type stepes_runWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: stepes_runWhereInput | stepes_runWhereInput[]
    OR?: stepes_runWhereInput[]
    NOT?: stepes_runWhereInput | stepes_runWhereInput[]
    meta_data?: JsonFilter<"stepes_run">
    status?: Enumworking_statusFilter<"stepes_run"> | $Enums.working_status
    step_id?: IntFilter<"stepes_run"> | number
    workflow_id?: IntFilter<"stepes_run"> | number
    create_at?: DateTimeFilter<"stepes_run"> | Date | string
    update_at?: DateTimeFilter<"stepes_run"> | Date | string
    step?: XOR<StepScalarRelationFilter, stepWhereInput>
    workflow?: XOR<WorkflowScalarRelationFilter, workflowWhereInput>
    out_box_step_run?: Out_box_step_runListRelationFilter
    working_step_validation?: Working_step_validatorListRelationFilter
  }, "id">

  export type stepes_runOrderByWithAggregationInput = {
    id?: SortOrder
    meta_data?: SortOrder
    status?: SortOrder
    step_id?: SortOrder
    workflow_id?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
    _count?: stepes_runCountOrderByAggregateInput
    _avg?: stepes_runAvgOrderByAggregateInput
    _max?: stepes_runMaxOrderByAggregateInput
    _min?: stepes_runMinOrderByAggregateInput
    _sum?: stepes_runSumOrderByAggregateInput
  }

  export type stepes_runScalarWhereWithAggregatesInput = {
    AND?: stepes_runScalarWhereWithAggregatesInput | stepes_runScalarWhereWithAggregatesInput[]
    OR?: stepes_runScalarWhereWithAggregatesInput[]
    NOT?: stepes_runScalarWhereWithAggregatesInput | stepes_runScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"stepes_run"> | number
    meta_data?: JsonWithAggregatesFilter<"stepes_run">
    status?: Enumworking_statusWithAggregatesFilter<"stepes_run"> | $Enums.working_status
    step_id?: IntWithAggregatesFilter<"stepes_run"> | number
    workflow_id?: IntWithAggregatesFilter<"stepes_run"> | number
    create_at?: DateTimeWithAggregatesFilter<"stepes_run"> | Date | string
    update_at?: DateTimeWithAggregatesFilter<"stepes_run"> | Date | string
  }

  export type out_box_step_runWhereInput = {
    AND?: out_box_step_runWhereInput | out_box_step_runWhereInput[]
    OR?: out_box_step_runWhereInput[]
    NOT?: out_box_step_runWhereInput | out_box_step_runWhereInput[]
    id?: IntFilter<"out_box_step_run"> | number
    stepes_run_id?: IntFilter<"out_box_step_run"> | number
    create_at?: DateTimeFilter<"out_box_step_run"> | Date | string
    update_at?: DateTimeFilter<"out_box_step_run"> | Date | string
    stepes_run?: XOR<Stepes_runScalarRelationFilter, stepes_runWhereInput>
  }

  export type out_box_step_runOrderByWithRelationInput = {
    id?: SortOrder
    stepes_run_id?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
    stepes_run?: stepes_runOrderByWithRelationInput
  }

  export type out_box_step_runWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: out_box_step_runWhereInput | out_box_step_runWhereInput[]
    OR?: out_box_step_runWhereInput[]
    NOT?: out_box_step_runWhereInput | out_box_step_runWhereInput[]
    stepes_run_id?: IntFilter<"out_box_step_run"> | number
    create_at?: DateTimeFilter<"out_box_step_run"> | Date | string
    update_at?: DateTimeFilter<"out_box_step_run"> | Date | string
    stepes_run?: XOR<Stepes_runScalarRelationFilter, stepes_runWhereInput>
  }, "id">

  export type out_box_step_runOrderByWithAggregationInput = {
    id?: SortOrder
    stepes_run_id?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
    _count?: out_box_step_runCountOrderByAggregateInput
    _avg?: out_box_step_runAvgOrderByAggregateInput
    _max?: out_box_step_runMaxOrderByAggregateInput
    _min?: out_box_step_runMinOrderByAggregateInput
    _sum?: out_box_step_runSumOrderByAggregateInput
  }

  export type out_box_step_runScalarWhereWithAggregatesInput = {
    AND?: out_box_step_runScalarWhereWithAggregatesInput | out_box_step_runScalarWhereWithAggregatesInput[]
    OR?: out_box_step_runScalarWhereWithAggregatesInput[]
    NOT?: out_box_step_runScalarWhereWithAggregatesInput | out_box_step_runScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"out_box_step_run"> | number
    stepes_run_id?: IntWithAggregatesFilter<"out_box_step_run"> | number
    create_at?: DateTimeWithAggregatesFilter<"out_box_step_run"> | Date | string
    update_at?: DateTimeWithAggregatesFilter<"out_box_step_run"> | Date | string
  }

  export type working_step_validatorWhereInput = {
    AND?: working_step_validatorWhereInput | working_step_validatorWhereInput[]
    OR?: working_step_validatorWhereInput[]
    NOT?: working_step_validatorWhereInput | working_step_validatorWhereInput[]
    id?: IntFilter<"working_step_validator"> | number
    stepes_run_id?: IntFilter<"working_step_validator"> | number
    email?: StringNullableFilter<"working_step_validator"> | string | null
    message_id?: StringNullableFilter<"working_step_validator"> | string | null
    index?: IntFilter<"working_step_validator"> | number
    status?: Enumstep_validation_statusFilter<"working_step_validator"> | $Enums.step_validation_status
    create_at?: DateTimeFilter<"working_step_validator"> | Date | string
    update_at?: DateTimeFilter<"working_step_validator"> | Date | string
    stepes_run?: XOR<Stepes_runScalarRelationFilter, stepes_runWhereInput>
    reseve_email_validator?: Reseve_email_validatorListRelationFilter
  }

  export type working_step_validatorOrderByWithRelationInput = {
    id?: SortOrder
    stepes_run_id?: SortOrder
    email?: SortOrderInput | SortOrder
    message_id?: SortOrderInput | SortOrder
    index?: SortOrder
    status?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
    stepes_run?: stepes_runOrderByWithRelationInput
    reseve_email_validator?: reseve_email_validatorOrderByRelationAggregateInput
  }

  export type working_step_validatorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    message_id?: string
    AND?: working_step_validatorWhereInput | working_step_validatorWhereInput[]
    OR?: working_step_validatorWhereInput[]
    NOT?: working_step_validatorWhereInput | working_step_validatorWhereInput[]
    stepes_run_id?: IntFilter<"working_step_validator"> | number
    email?: StringNullableFilter<"working_step_validator"> | string | null
    index?: IntFilter<"working_step_validator"> | number
    status?: Enumstep_validation_statusFilter<"working_step_validator"> | $Enums.step_validation_status
    create_at?: DateTimeFilter<"working_step_validator"> | Date | string
    update_at?: DateTimeFilter<"working_step_validator"> | Date | string
    stepes_run?: XOR<Stepes_runScalarRelationFilter, stepes_runWhereInput>
    reseve_email_validator?: Reseve_email_validatorListRelationFilter
  }, "id" | "message_id">

  export type working_step_validatorOrderByWithAggregationInput = {
    id?: SortOrder
    stepes_run_id?: SortOrder
    email?: SortOrderInput | SortOrder
    message_id?: SortOrderInput | SortOrder
    index?: SortOrder
    status?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
    _count?: working_step_validatorCountOrderByAggregateInput
    _avg?: working_step_validatorAvgOrderByAggregateInput
    _max?: working_step_validatorMaxOrderByAggregateInput
    _min?: working_step_validatorMinOrderByAggregateInput
    _sum?: working_step_validatorSumOrderByAggregateInput
  }

  export type working_step_validatorScalarWhereWithAggregatesInput = {
    AND?: working_step_validatorScalarWhereWithAggregatesInput | working_step_validatorScalarWhereWithAggregatesInput[]
    OR?: working_step_validatorScalarWhereWithAggregatesInput[]
    NOT?: working_step_validatorScalarWhereWithAggregatesInput | working_step_validatorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"working_step_validator"> | number
    stepes_run_id?: IntWithAggregatesFilter<"working_step_validator"> | number
    email?: StringNullableWithAggregatesFilter<"working_step_validator"> | string | null
    message_id?: StringNullableWithAggregatesFilter<"working_step_validator"> | string | null
    index?: IntWithAggregatesFilter<"working_step_validator"> | number
    status?: Enumstep_validation_statusWithAggregatesFilter<"working_step_validator"> | $Enums.step_validation_status
    create_at?: DateTimeWithAggregatesFilter<"working_step_validator"> | Date | string
    update_at?: DateTimeWithAggregatesFilter<"working_step_validator"> | Date | string
  }

  export type reseve_email_validatorWhereInput = {
    AND?: reseve_email_validatorWhereInput | reseve_email_validatorWhereInput[]
    OR?: reseve_email_validatorWhereInput[]
    NOT?: reseve_email_validatorWhereInput | reseve_email_validatorWhereInput[]
    id?: IntFilter<"reseve_email_validator"> | number
    working_step_validator_id?: IntFilter<"reseve_email_validator"> | number
    status?: Enumworking_statusFilter<"reseve_email_validator"> | $Enums.working_status
    create_at?: DateTimeFilter<"reseve_email_validator"> | Date | string
    update_at?: DateTimeFilter<"reseve_email_validator"> | Date | string
    working_step_validator?: XOR<Working_step_validatorScalarRelationFilter, working_step_validatorWhereInput>
  }

  export type reseve_email_validatorOrderByWithRelationInput = {
    id?: SortOrder
    working_step_validator_id?: SortOrder
    status?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
    working_step_validator?: working_step_validatorOrderByWithRelationInput
  }

  export type reseve_email_validatorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: reseve_email_validatorWhereInput | reseve_email_validatorWhereInput[]
    OR?: reseve_email_validatorWhereInput[]
    NOT?: reseve_email_validatorWhereInput | reseve_email_validatorWhereInput[]
    working_step_validator_id?: IntFilter<"reseve_email_validator"> | number
    status?: Enumworking_statusFilter<"reseve_email_validator"> | $Enums.working_status
    create_at?: DateTimeFilter<"reseve_email_validator"> | Date | string
    update_at?: DateTimeFilter<"reseve_email_validator"> | Date | string
    working_step_validator?: XOR<Working_step_validatorScalarRelationFilter, working_step_validatorWhereInput>
  }, "id">

  export type reseve_email_validatorOrderByWithAggregationInput = {
    id?: SortOrder
    working_step_validator_id?: SortOrder
    status?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
    _count?: reseve_email_validatorCountOrderByAggregateInput
    _avg?: reseve_email_validatorAvgOrderByAggregateInput
    _max?: reseve_email_validatorMaxOrderByAggregateInput
    _min?: reseve_email_validatorMinOrderByAggregateInput
    _sum?: reseve_email_validatorSumOrderByAggregateInput
  }

  export type reseve_email_validatorScalarWhereWithAggregatesInput = {
    AND?: reseve_email_validatorScalarWhereWithAggregatesInput | reseve_email_validatorScalarWhereWithAggregatesInput[]
    OR?: reseve_email_validatorScalarWhereWithAggregatesInput[]
    NOT?: reseve_email_validatorScalarWhereWithAggregatesInput | reseve_email_validatorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"reseve_email_validator"> | number
    working_step_validator_id?: IntWithAggregatesFilter<"reseve_email_validator"> | number
    status?: Enumworking_statusWithAggregatesFilter<"reseve_email_validator"> | $Enums.working_status
    create_at?: DateTimeWithAggregatesFilter<"reseve_email_validator"> | Date | string
    update_at?: DateTimeWithAggregatesFilter<"reseve_email_validator"> | Date | string
  }

  export type userCreateInput = {
    name: string
    email: string
    password: string
    is_active: boolean
    create_at: Date | string
    update_at?: Date | string
    stepes?: stepCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    is_active: boolean
    create_at: Date | string
    update_at?: Date | string
    stepes?: stepUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    stepes?: stepUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    stepes?: stepUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    is_active: boolean
    create_at: Date | string
    update_at?: Date | string
  }

  export type userUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type typeofstepCreateInput = {
    name: string
    app: string
    work_type: $Enums.work_type
    meta_data: JsonNullValueInput | InputJsonValue
    image_url: string
    create_at: Date | string
    update_at?: Date | string
    stepes?: stepCreateNestedManyWithoutTypeofstepInput
  }

  export type typeofstepUncheckedCreateInput = {
    id?: number
    name: string
    app: string
    work_type: $Enums.work_type
    meta_data: JsonNullValueInput | InputJsonValue
    image_url: string
    create_at: Date | string
    update_at?: Date | string
    stepes?: stepUncheckedCreateNestedManyWithoutTypeofstepInput
  }

  export type typeofstepUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    app?: StringFieldUpdateOperationsInput | string
    work_type?: Enumwork_typeFieldUpdateOperationsInput | $Enums.work_type
    meta_data?: JsonNullValueInput | InputJsonValue
    image_url?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    stepes?: stepUpdateManyWithoutTypeofstepNestedInput
  }

  export type typeofstepUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    app?: StringFieldUpdateOperationsInput | string
    work_type?: Enumwork_typeFieldUpdateOperationsInput | $Enums.work_type
    meta_data?: JsonNullValueInput | InputJsonValue
    image_url?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    stepes?: stepUncheckedUpdateManyWithoutTypeofstepNestedInput
  }

  export type typeofstepCreateManyInput = {
    id?: number
    name: string
    app: string
    work_type: $Enums.work_type
    meta_data: JsonNullValueInput | InputJsonValue
    image_url: string
    create_at: Date | string
    update_at?: Date | string
  }

  export type typeofstepUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    app?: StringFieldUpdateOperationsInput | string
    work_type?: Enumwork_typeFieldUpdateOperationsInput | $Enums.work_type
    meta_data?: JsonNullValueInput | InputJsonValue
    image_url?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type typeofstepUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    app?: StringFieldUpdateOperationsInput | string
    work_type?: Enumwork_typeFieldUpdateOperationsInput | $Enums.work_type
    meta_data?: JsonNullValueInput | InputJsonValue
    image_url?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type workflowCreateInput = {
    name: string
    status: $Enums.status
    create_at: Date | string
    update_at?: Date | string
    stepes?: stepCreateNestedManyWithoutWorkflowInput
    stepes_runs?: stepes_runCreateNestedManyWithoutWorkflowInput
  }

  export type workflowUncheckedCreateInput = {
    id?: number
    name: string
    status: $Enums.status
    create_at: Date | string
    update_at?: Date | string
    stepes?: stepUncheckedCreateNestedManyWithoutWorkflowInput
    stepes_runs?: stepes_runUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type workflowUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    stepes?: stepUpdateManyWithoutWorkflowNestedInput
    stepes_runs?: stepes_runUpdateManyWithoutWorkflowNestedInput
  }

  export type workflowUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    stepes?: stepUncheckedUpdateManyWithoutWorkflowNestedInput
    stepes_runs?: stepes_runUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type workflowCreateManyInput = {
    id?: number
    name: string
    status: $Enums.status
    create_at: Date | string
    update_at?: Date | string
  }

  export type workflowUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type workflowUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type stepCreateInput = {
    name?: string | null
    index: number
    meta_data: JsonNullValueInput | InputJsonValue
    status: $Enums.status
    create_at: Date | string
    update_at?: Date | string
    typeofstep: typeofstepCreateNestedOneWithoutStepesInput
    user: userCreateNestedOneWithoutStepesInput
    workflow: workflowCreateNestedOneWithoutStepesInput
    stepes_runs?: stepes_runCreateNestedManyWithoutStepInput
  }

  export type stepUncheckedCreateInput = {
    id?: number
    name?: string | null
    index: number
    typeofstap_id: number
    user_id: number
    workflow_id: number
    meta_data: JsonNullValueInput | InputJsonValue
    status: $Enums.status
    create_at: Date | string
    update_at?: Date | string
    stepes_runs?: stepes_runUncheckedCreateNestedManyWithoutStepInput
  }

  export type stepUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    index?: IntFieldUpdateOperationsInput | number
    meta_data?: JsonNullValueInput | InputJsonValue
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    typeofstep?: typeofstepUpdateOneRequiredWithoutStepesNestedInput
    user?: userUpdateOneRequiredWithoutStepesNestedInput
    workflow?: workflowUpdateOneRequiredWithoutStepesNestedInput
    stepes_runs?: stepes_runUpdateManyWithoutStepNestedInput
  }

  export type stepUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    index?: IntFieldUpdateOperationsInput | number
    typeofstap_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    workflow_id?: IntFieldUpdateOperationsInput | number
    meta_data?: JsonNullValueInput | InputJsonValue
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    stepes_runs?: stepes_runUncheckedUpdateManyWithoutStepNestedInput
  }

  export type stepCreateManyInput = {
    id?: number
    name?: string | null
    index: number
    typeofstap_id: number
    user_id: number
    workflow_id: number
    meta_data: JsonNullValueInput | InputJsonValue
    status: $Enums.status
    create_at: Date | string
    update_at?: Date | string
  }

  export type stepUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    index?: IntFieldUpdateOperationsInput | number
    meta_data?: JsonNullValueInput | InputJsonValue
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type stepUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    index?: IntFieldUpdateOperationsInput | number
    typeofstap_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    workflow_id?: IntFieldUpdateOperationsInput | number
    meta_data?: JsonNullValueInput | InputJsonValue
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type stepes_runCreateInput = {
    meta_data: JsonNullValueInput | InputJsonValue
    status: $Enums.working_status
    create_at: Date | string
    update_at?: Date | string
    step: stepCreateNestedOneWithoutStepes_runsInput
    workflow: workflowCreateNestedOneWithoutStepes_runsInput
    out_box_step_run?: out_box_step_runCreateNestedManyWithoutStepes_runInput
    working_step_validation?: working_step_validatorCreateNestedManyWithoutStepes_runInput
  }

  export type stepes_runUncheckedCreateInput = {
    id?: number
    meta_data: JsonNullValueInput | InputJsonValue
    status: $Enums.working_status
    step_id: number
    workflow_id: number
    create_at: Date | string
    update_at?: Date | string
    out_box_step_run?: out_box_step_runUncheckedCreateNestedManyWithoutStepes_runInput
    working_step_validation?: working_step_validatorUncheckedCreateNestedManyWithoutStepes_runInput
  }

  export type stepes_runUpdateInput = {
    meta_data?: JsonNullValueInput | InputJsonValue
    status?: Enumworking_statusFieldUpdateOperationsInput | $Enums.working_status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    step?: stepUpdateOneRequiredWithoutStepes_runsNestedInput
    workflow?: workflowUpdateOneRequiredWithoutStepes_runsNestedInput
    out_box_step_run?: out_box_step_runUpdateManyWithoutStepes_runNestedInput
    working_step_validation?: working_step_validatorUpdateManyWithoutStepes_runNestedInput
  }

  export type stepes_runUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    meta_data?: JsonNullValueInput | InputJsonValue
    status?: Enumworking_statusFieldUpdateOperationsInput | $Enums.working_status
    step_id?: IntFieldUpdateOperationsInput | number
    workflow_id?: IntFieldUpdateOperationsInput | number
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    out_box_step_run?: out_box_step_runUncheckedUpdateManyWithoutStepes_runNestedInput
    working_step_validation?: working_step_validatorUncheckedUpdateManyWithoutStepes_runNestedInput
  }

  export type stepes_runCreateManyInput = {
    id?: number
    meta_data: JsonNullValueInput | InputJsonValue
    status: $Enums.working_status
    step_id: number
    workflow_id: number
    create_at: Date | string
    update_at?: Date | string
  }

  export type stepes_runUpdateManyMutationInput = {
    meta_data?: JsonNullValueInput | InputJsonValue
    status?: Enumworking_statusFieldUpdateOperationsInput | $Enums.working_status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type stepes_runUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    meta_data?: JsonNullValueInput | InputJsonValue
    status?: Enumworking_statusFieldUpdateOperationsInput | $Enums.working_status
    step_id?: IntFieldUpdateOperationsInput | number
    workflow_id?: IntFieldUpdateOperationsInput | number
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type out_box_step_runCreateInput = {
    create_at: Date | string
    update_at?: Date | string
    stepes_run: stepes_runCreateNestedOneWithoutOut_box_step_runInput
  }

  export type out_box_step_runUncheckedCreateInput = {
    id?: number
    stepes_run_id: number
    create_at: Date | string
    update_at?: Date | string
  }

  export type out_box_step_runUpdateInput = {
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    stepes_run?: stepes_runUpdateOneRequiredWithoutOut_box_step_runNestedInput
  }

  export type out_box_step_runUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    stepes_run_id?: IntFieldUpdateOperationsInput | number
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type out_box_step_runCreateManyInput = {
    id?: number
    stepes_run_id: number
    create_at: Date | string
    update_at?: Date | string
  }

  export type out_box_step_runUpdateManyMutationInput = {
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type out_box_step_runUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    stepes_run_id?: IntFieldUpdateOperationsInput | number
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type working_step_validatorCreateInput = {
    email?: string | null
    message_id?: string | null
    index: number
    status: $Enums.step_validation_status
    create_at: Date | string
    update_at?: Date | string
    stepes_run: stepes_runCreateNestedOneWithoutWorking_step_validationInput
    reseve_email_validator?: reseve_email_validatorCreateNestedManyWithoutWorking_step_validatorInput
  }

  export type working_step_validatorUncheckedCreateInput = {
    id?: number
    stepes_run_id: number
    email?: string | null
    message_id?: string | null
    index: number
    status: $Enums.step_validation_status
    create_at: Date | string
    update_at?: Date | string
    reseve_email_validator?: reseve_email_validatorUncheckedCreateNestedManyWithoutWorking_step_validatorInput
  }

  export type working_step_validatorUpdateInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    index?: IntFieldUpdateOperationsInput | number
    status?: Enumstep_validation_statusFieldUpdateOperationsInput | $Enums.step_validation_status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    stepes_run?: stepes_runUpdateOneRequiredWithoutWorking_step_validationNestedInput
    reseve_email_validator?: reseve_email_validatorUpdateManyWithoutWorking_step_validatorNestedInput
  }

  export type working_step_validatorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    stepes_run_id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    index?: IntFieldUpdateOperationsInput | number
    status?: Enumstep_validation_statusFieldUpdateOperationsInput | $Enums.step_validation_status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reseve_email_validator?: reseve_email_validatorUncheckedUpdateManyWithoutWorking_step_validatorNestedInput
  }

  export type working_step_validatorCreateManyInput = {
    id?: number
    stepes_run_id: number
    email?: string | null
    message_id?: string | null
    index: number
    status: $Enums.step_validation_status
    create_at: Date | string
    update_at?: Date | string
  }

  export type working_step_validatorUpdateManyMutationInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    index?: IntFieldUpdateOperationsInput | number
    status?: Enumstep_validation_statusFieldUpdateOperationsInput | $Enums.step_validation_status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type working_step_validatorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    stepes_run_id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    index?: IntFieldUpdateOperationsInput | number
    status?: Enumstep_validation_statusFieldUpdateOperationsInput | $Enums.step_validation_status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reseve_email_validatorCreateInput = {
    status: $Enums.working_status
    create_at: Date | string
    update_at?: Date | string
    working_step_validator: working_step_validatorCreateNestedOneWithoutReseve_email_validatorInput
  }

  export type reseve_email_validatorUncheckedCreateInput = {
    id?: number
    working_step_validator_id: number
    status: $Enums.working_status
    create_at: Date | string
    update_at?: Date | string
  }

  export type reseve_email_validatorUpdateInput = {
    status?: Enumworking_statusFieldUpdateOperationsInput | $Enums.working_status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    working_step_validator?: working_step_validatorUpdateOneRequiredWithoutReseve_email_validatorNestedInput
  }

  export type reseve_email_validatorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    working_step_validator_id?: IntFieldUpdateOperationsInput | number
    status?: Enumworking_statusFieldUpdateOperationsInput | $Enums.working_status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reseve_email_validatorCreateManyInput = {
    id?: number
    working_step_validator_id: number
    status: $Enums.working_status
    create_at: Date | string
    update_at?: Date | string
  }

  export type reseve_email_validatorUpdateManyMutationInput = {
    status?: Enumworking_statusFieldUpdateOperationsInput | $Enums.working_status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reseve_email_validatorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    working_step_validator_id?: IntFieldUpdateOperationsInput | number
    status?: Enumworking_statusFieldUpdateOperationsInput | $Enums.working_status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StepListRelationFilter = {
    every?: stepWhereInput
    some?: stepWhereInput
    none?: stepWhereInput
  }

  export type stepOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    is_active?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    is_active?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    is_active?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Enumwork_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.work_type | Enumwork_typeFieldRefInput<$PrismaModel>
    in?: $Enums.work_type[] | ListEnumwork_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.work_type[] | ListEnumwork_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumwork_typeFilter<$PrismaModel> | $Enums.work_type
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type typeofstepCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    app?: SortOrder
    work_type?: SortOrder
    meta_data?: SortOrder
    image_url?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type typeofstepAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type typeofstepMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    app?: SortOrder
    work_type?: SortOrder
    image_url?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type typeofstepMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    app?: SortOrder
    work_type?: SortOrder
    image_url?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type typeofstepSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumwork_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.work_type | Enumwork_typeFieldRefInput<$PrismaModel>
    in?: $Enums.work_type[] | ListEnumwork_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.work_type[] | ListEnumwork_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumwork_typeWithAggregatesFilter<$PrismaModel> | $Enums.work_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumwork_typeFilter<$PrismaModel>
    _max?: NestedEnumwork_typeFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumstatusFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusFilter<$PrismaModel> | $Enums.status
  }

  export type Stepes_runListRelationFilter = {
    every?: stepes_runWhereInput
    some?: stepes_runWhereInput
    none?: stepes_runWhereInput
  }

  export type stepes_runOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type workflowCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type workflowAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type workflowMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type workflowMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type workflowSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumstatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusWithAggregatesFilter<$PrismaModel> | $Enums.status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusFilter<$PrismaModel>
    _max?: NestedEnumstatusFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TypeofstepScalarRelationFilter = {
    is?: typeofstepWhereInput
    isNot?: typeofstepWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type WorkflowScalarRelationFilter = {
    is?: workflowWhereInput
    isNot?: workflowWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type stepCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    index?: SortOrder
    typeofstap_id?: SortOrder
    user_id?: SortOrder
    workflow_id?: SortOrder
    meta_data?: SortOrder
    status?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type stepAvgOrderByAggregateInput = {
    id?: SortOrder
    index?: SortOrder
    typeofstap_id?: SortOrder
    user_id?: SortOrder
    workflow_id?: SortOrder
  }

  export type stepMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    index?: SortOrder
    typeofstap_id?: SortOrder
    user_id?: SortOrder
    workflow_id?: SortOrder
    status?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type stepMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    index?: SortOrder
    typeofstap_id?: SortOrder
    user_id?: SortOrder
    workflow_id?: SortOrder
    status?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type stepSumOrderByAggregateInput = {
    id?: SortOrder
    index?: SortOrder
    typeofstap_id?: SortOrder
    user_id?: SortOrder
    workflow_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enumworking_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.working_status | Enumworking_statusFieldRefInput<$PrismaModel>
    in?: $Enums.working_status[] | ListEnumworking_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.working_status[] | ListEnumworking_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumworking_statusFilter<$PrismaModel> | $Enums.working_status
  }

  export type StepScalarRelationFilter = {
    is?: stepWhereInput
    isNot?: stepWhereInput
  }

  export type Out_box_step_runListRelationFilter = {
    every?: out_box_step_runWhereInput
    some?: out_box_step_runWhereInput
    none?: out_box_step_runWhereInput
  }

  export type Working_step_validatorListRelationFilter = {
    every?: working_step_validatorWhereInput
    some?: working_step_validatorWhereInput
    none?: working_step_validatorWhereInput
  }

  export type out_box_step_runOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type working_step_validatorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type stepes_runCountOrderByAggregateInput = {
    id?: SortOrder
    meta_data?: SortOrder
    status?: SortOrder
    step_id?: SortOrder
    workflow_id?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type stepes_runAvgOrderByAggregateInput = {
    id?: SortOrder
    step_id?: SortOrder
    workflow_id?: SortOrder
  }

  export type stepes_runMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    step_id?: SortOrder
    workflow_id?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type stepes_runMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    step_id?: SortOrder
    workflow_id?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type stepes_runSumOrderByAggregateInput = {
    id?: SortOrder
    step_id?: SortOrder
    workflow_id?: SortOrder
  }

  export type Enumworking_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.working_status | Enumworking_statusFieldRefInput<$PrismaModel>
    in?: $Enums.working_status[] | ListEnumworking_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.working_status[] | ListEnumworking_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumworking_statusWithAggregatesFilter<$PrismaModel> | $Enums.working_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumworking_statusFilter<$PrismaModel>
    _max?: NestedEnumworking_statusFilter<$PrismaModel>
  }

  export type Stepes_runScalarRelationFilter = {
    is?: stepes_runWhereInput
    isNot?: stepes_runWhereInput
  }

  export type out_box_step_runCountOrderByAggregateInput = {
    id?: SortOrder
    stepes_run_id?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type out_box_step_runAvgOrderByAggregateInput = {
    id?: SortOrder
    stepes_run_id?: SortOrder
  }

  export type out_box_step_runMaxOrderByAggregateInput = {
    id?: SortOrder
    stepes_run_id?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type out_box_step_runMinOrderByAggregateInput = {
    id?: SortOrder
    stepes_run_id?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type out_box_step_runSumOrderByAggregateInput = {
    id?: SortOrder
    stepes_run_id?: SortOrder
  }

  export type Enumstep_validation_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.step_validation_status | Enumstep_validation_statusFieldRefInput<$PrismaModel>
    in?: $Enums.step_validation_status[] | ListEnumstep_validation_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.step_validation_status[] | ListEnumstep_validation_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumstep_validation_statusFilter<$PrismaModel> | $Enums.step_validation_status
  }

  export type Reseve_email_validatorListRelationFilter = {
    every?: reseve_email_validatorWhereInput
    some?: reseve_email_validatorWhereInput
    none?: reseve_email_validatorWhereInput
  }

  export type reseve_email_validatorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type working_step_validatorCountOrderByAggregateInput = {
    id?: SortOrder
    stepes_run_id?: SortOrder
    email?: SortOrder
    message_id?: SortOrder
    index?: SortOrder
    status?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type working_step_validatorAvgOrderByAggregateInput = {
    id?: SortOrder
    stepes_run_id?: SortOrder
    index?: SortOrder
  }

  export type working_step_validatorMaxOrderByAggregateInput = {
    id?: SortOrder
    stepes_run_id?: SortOrder
    email?: SortOrder
    message_id?: SortOrder
    index?: SortOrder
    status?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type working_step_validatorMinOrderByAggregateInput = {
    id?: SortOrder
    stepes_run_id?: SortOrder
    email?: SortOrder
    message_id?: SortOrder
    index?: SortOrder
    status?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type working_step_validatorSumOrderByAggregateInput = {
    id?: SortOrder
    stepes_run_id?: SortOrder
    index?: SortOrder
  }

  export type Enumstep_validation_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.step_validation_status | Enumstep_validation_statusFieldRefInput<$PrismaModel>
    in?: $Enums.step_validation_status[] | ListEnumstep_validation_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.step_validation_status[] | ListEnumstep_validation_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumstep_validation_statusWithAggregatesFilter<$PrismaModel> | $Enums.step_validation_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstep_validation_statusFilter<$PrismaModel>
    _max?: NestedEnumstep_validation_statusFilter<$PrismaModel>
  }

  export type Working_step_validatorScalarRelationFilter = {
    is?: working_step_validatorWhereInput
    isNot?: working_step_validatorWhereInput
  }

  export type reseve_email_validatorCountOrderByAggregateInput = {
    id?: SortOrder
    working_step_validator_id?: SortOrder
    status?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type reseve_email_validatorAvgOrderByAggregateInput = {
    id?: SortOrder
    working_step_validator_id?: SortOrder
  }

  export type reseve_email_validatorMaxOrderByAggregateInput = {
    id?: SortOrder
    working_step_validator_id?: SortOrder
    status?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type reseve_email_validatorMinOrderByAggregateInput = {
    id?: SortOrder
    working_step_validator_id?: SortOrder
    status?: SortOrder
    create_at?: SortOrder
    update_at?: SortOrder
  }

  export type reseve_email_validatorSumOrderByAggregateInput = {
    id?: SortOrder
    working_step_validator_id?: SortOrder
  }

  export type stepCreateNestedManyWithoutUserInput = {
    create?: XOR<stepCreateWithoutUserInput, stepUncheckedCreateWithoutUserInput> | stepCreateWithoutUserInput[] | stepUncheckedCreateWithoutUserInput[]
    connectOrCreate?: stepCreateOrConnectWithoutUserInput | stepCreateOrConnectWithoutUserInput[]
    createMany?: stepCreateManyUserInputEnvelope
    connect?: stepWhereUniqueInput | stepWhereUniqueInput[]
  }

  export type stepUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<stepCreateWithoutUserInput, stepUncheckedCreateWithoutUserInput> | stepCreateWithoutUserInput[] | stepUncheckedCreateWithoutUserInput[]
    connectOrCreate?: stepCreateOrConnectWithoutUserInput | stepCreateOrConnectWithoutUserInput[]
    createMany?: stepCreateManyUserInputEnvelope
    connect?: stepWhereUniqueInput | stepWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type stepUpdateManyWithoutUserNestedInput = {
    create?: XOR<stepCreateWithoutUserInput, stepUncheckedCreateWithoutUserInput> | stepCreateWithoutUserInput[] | stepUncheckedCreateWithoutUserInput[]
    connectOrCreate?: stepCreateOrConnectWithoutUserInput | stepCreateOrConnectWithoutUserInput[]
    upsert?: stepUpsertWithWhereUniqueWithoutUserInput | stepUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: stepCreateManyUserInputEnvelope
    set?: stepWhereUniqueInput | stepWhereUniqueInput[]
    disconnect?: stepWhereUniqueInput | stepWhereUniqueInput[]
    delete?: stepWhereUniqueInput | stepWhereUniqueInput[]
    connect?: stepWhereUniqueInput | stepWhereUniqueInput[]
    update?: stepUpdateWithWhereUniqueWithoutUserInput | stepUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: stepUpdateManyWithWhereWithoutUserInput | stepUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: stepScalarWhereInput | stepScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type stepUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<stepCreateWithoutUserInput, stepUncheckedCreateWithoutUserInput> | stepCreateWithoutUserInput[] | stepUncheckedCreateWithoutUserInput[]
    connectOrCreate?: stepCreateOrConnectWithoutUserInput | stepCreateOrConnectWithoutUserInput[]
    upsert?: stepUpsertWithWhereUniqueWithoutUserInput | stepUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: stepCreateManyUserInputEnvelope
    set?: stepWhereUniqueInput | stepWhereUniqueInput[]
    disconnect?: stepWhereUniqueInput | stepWhereUniqueInput[]
    delete?: stepWhereUniqueInput | stepWhereUniqueInput[]
    connect?: stepWhereUniqueInput | stepWhereUniqueInput[]
    update?: stepUpdateWithWhereUniqueWithoutUserInput | stepUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: stepUpdateManyWithWhereWithoutUserInput | stepUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: stepScalarWhereInput | stepScalarWhereInput[]
  }

  export type stepCreateNestedManyWithoutTypeofstepInput = {
    create?: XOR<stepCreateWithoutTypeofstepInput, stepUncheckedCreateWithoutTypeofstepInput> | stepCreateWithoutTypeofstepInput[] | stepUncheckedCreateWithoutTypeofstepInput[]
    connectOrCreate?: stepCreateOrConnectWithoutTypeofstepInput | stepCreateOrConnectWithoutTypeofstepInput[]
    createMany?: stepCreateManyTypeofstepInputEnvelope
    connect?: stepWhereUniqueInput | stepWhereUniqueInput[]
  }

  export type stepUncheckedCreateNestedManyWithoutTypeofstepInput = {
    create?: XOR<stepCreateWithoutTypeofstepInput, stepUncheckedCreateWithoutTypeofstepInput> | stepCreateWithoutTypeofstepInput[] | stepUncheckedCreateWithoutTypeofstepInput[]
    connectOrCreate?: stepCreateOrConnectWithoutTypeofstepInput | stepCreateOrConnectWithoutTypeofstepInput[]
    createMany?: stepCreateManyTypeofstepInputEnvelope
    connect?: stepWhereUniqueInput | stepWhereUniqueInput[]
  }

  export type Enumwork_typeFieldUpdateOperationsInput = {
    set?: $Enums.work_type
  }

  export type stepUpdateManyWithoutTypeofstepNestedInput = {
    create?: XOR<stepCreateWithoutTypeofstepInput, stepUncheckedCreateWithoutTypeofstepInput> | stepCreateWithoutTypeofstepInput[] | stepUncheckedCreateWithoutTypeofstepInput[]
    connectOrCreate?: stepCreateOrConnectWithoutTypeofstepInput | stepCreateOrConnectWithoutTypeofstepInput[]
    upsert?: stepUpsertWithWhereUniqueWithoutTypeofstepInput | stepUpsertWithWhereUniqueWithoutTypeofstepInput[]
    createMany?: stepCreateManyTypeofstepInputEnvelope
    set?: stepWhereUniqueInput | stepWhereUniqueInput[]
    disconnect?: stepWhereUniqueInput | stepWhereUniqueInput[]
    delete?: stepWhereUniqueInput | stepWhereUniqueInput[]
    connect?: stepWhereUniqueInput | stepWhereUniqueInput[]
    update?: stepUpdateWithWhereUniqueWithoutTypeofstepInput | stepUpdateWithWhereUniqueWithoutTypeofstepInput[]
    updateMany?: stepUpdateManyWithWhereWithoutTypeofstepInput | stepUpdateManyWithWhereWithoutTypeofstepInput[]
    deleteMany?: stepScalarWhereInput | stepScalarWhereInput[]
  }

  export type stepUncheckedUpdateManyWithoutTypeofstepNestedInput = {
    create?: XOR<stepCreateWithoutTypeofstepInput, stepUncheckedCreateWithoutTypeofstepInput> | stepCreateWithoutTypeofstepInput[] | stepUncheckedCreateWithoutTypeofstepInput[]
    connectOrCreate?: stepCreateOrConnectWithoutTypeofstepInput | stepCreateOrConnectWithoutTypeofstepInput[]
    upsert?: stepUpsertWithWhereUniqueWithoutTypeofstepInput | stepUpsertWithWhereUniqueWithoutTypeofstepInput[]
    createMany?: stepCreateManyTypeofstepInputEnvelope
    set?: stepWhereUniqueInput | stepWhereUniqueInput[]
    disconnect?: stepWhereUniqueInput | stepWhereUniqueInput[]
    delete?: stepWhereUniqueInput | stepWhereUniqueInput[]
    connect?: stepWhereUniqueInput | stepWhereUniqueInput[]
    update?: stepUpdateWithWhereUniqueWithoutTypeofstepInput | stepUpdateWithWhereUniqueWithoutTypeofstepInput[]
    updateMany?: stepUpdateManyWithWhereWithoutTypeofstepInput | stepUpdateManyWithWhereWithoutTypeofstepInput[]
    deleteMany?: stepScalarWhereInput | stepScalarWhereInput[]
  }

  export type stepCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<stepCreateWithoutWorkflowInput, stepUncheckedCreateWithoutWorkflowInput> | stepCreateWithoutWorkflowInput[] | stepUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: stepCreateOrConnectWithoutWorkflowInput | stepCreateOrConnectWithoutWorkflowInput[]
    createMany?: stepCreateManyWorkflowInputEnvelope
    connect?: stepWhereUniqueInput | stepWhereUniqueInput[]
  }

  export type stepes_runCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<stepes_runCreateWithoutWorkflowInput, stepes_runUncheckedCreateWithoutWorkflowInput> | stepes_runCreateWithoutWorkflowInput[] | stepes_runUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: stepes_runCreateOrConnectWithoutWorkflowInput | stepes_runCreateOrConnectWithoutWorkflowInput[]
    createMany?: stepes_runCreateManyWorkflowInputEnvelope
    connect?: stepes_runWhereUniqueInput | stepes_runWhereUniqueInput[]
  }

  export type stepUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<stepCreateWithoutWorkflowInput, stepUncheckedCreateWithoutWorkflowInput> | stepCreateWithoutWorkflowInput[] | stepUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: stepCreateOrConnectWithoutWorkflowInput | stepCreateOrConnectWithoutWorkflowInput[]
    createMany?: stepCreateManyWorkflowInputEnvelope
    connect?: stepWhereUniqueInput | stepWhereUniqueInput[]
  }

  export type stepes_runUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<stepes_runCreateWithoutWorkflowInput, stepes_runUncheckedCreateWithoutWorkflowInput> | stepes_runCreateWithoutWorkflowInput[] | stepes_runUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: stepes_runCreateOrConnectWithoutWorkflowInput | stepes_runCreateOrConnectWithoutWorkflowInput[]
    createMany?: stepes_runCreateManyWorkflowInputEnvelope
    connect?: stepes_runWhereUniqueInput | stepes_runWhereUniqueInput[]
  }

  export type EnumstatusFieldUpdateOperationsInput = {
    set?: $Enums.status
  }

  export type stepUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<stepCreateWithoutWorkflowInput, stepUncheckedCreateWithoutWorkflowInput> | stepCreateWithoutWorkflowInput[] | stepUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: stepCreateOrConnectWithoutWorkflowInput | stepCreateOrConnectWithoutWorkflowInput[]
    upsert?: stepUpsertWithWhereUniqueWithoutWorkflowInput | stepUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: stepCreateManyWorkflowInputEnvelope
    set?: stepWhereUniqueInput | stepWhereUniqueInput[]
    disconnect?: stepWhereUniqueInput | stepWhereUniqueInput[]
    delete?: stepWhereUniqueInput | stepWhereUniqueInput[]
    connect?: stepWhereUniqueInput | stepWhereUniqueInput[]
    update?: stepUpdateWithWhereUniqueWithoutWorkflowInput | stepUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: stepUpdateManyWithWhereWithoutWorkflowInput | stepUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: stepScalarWhereInput | stepScalarWhereInput[]
  }

  export type stepes_runUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<stepes_runCreateWithoutWorkflowInput, stepes_runUncheckedCreateWithoutWorkflowInput> | stepes_runCreateWithoutWorkflowInput[] | stepes_runUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: stepes_runCreateOrConnectWithoutWorkflowInput | stepes_runCreateOrConnectWithoutWorkflowInput[]
    upsert?: stepes_runUpsertWithWhereUniqueWithoutWorkflowInput | stepes_runUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: stepes_runCreateManyWorkflowInputEnvelope
    set?: stepes_runWhereUniqueInput | stepes_runWhereUniqueInput[]
    disconnect?: stepes_runWhereUniqueInput | stepes_runWhereUniqueInput[]
    delete?: stepes_runWhereUniqueInput | stepes_runWhereUniqueInput[]
    connect?: stepes_runWhereUniqueInput | stepes_runWhereUniqueInput[]
    update?: stepes_runUpdateWithWhereUniqueWithoutWorkflowInput | stepes_runUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: stepes_runUpdateManyWithWhereWithoutWorkflowInput | stepes_runUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: stepes_runScalarWhereInput | stepes_runScalarWhereInput[]
  }

  export type stepUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<stepCreateWithoutWorkflowInput, stepUncheckedCreateWithoutWorkflowInput> | stepCreateWithoutWorkflowInput[] | stepUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: stepCreateOrConnectWithoutWorkflowInput | stepCreateOrConnectWithoutWorkflowInput[]
    upsert?: stepUpsertWithWhereUniqueWithoutWorkflowInput | stepUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: stepCreateManyWorkflowInputEnvelope
    set?: stepWhereUniqueInput | stepWhereUniqueInput[]
    disconnect?: stepWhereUniqueInput | stepWhereUniqueInput[]
    delete?: stepWhereUniqueInput | stepWhereUniqueInput[]
    connect?: stepWhereUniqueInput | stepWhereUniqueInput[]
    update?: stepUpdateWithWhereUniqueWithoutWorkflowInput | stepUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: stepUpdateManyWithWhereWithoutWorkflowInput | stepUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: stepScalarWhereInput | stepScalarWhereInput[]
  }

  export type stepes_runUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<stepes_runCreateWithoutWorkflowInput, stepes_runUncheckedCreateWithoutWorkflowInput> | stepes_runCreateWithoutWorkflowInput[] | stepes_runUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: stepes_runCreateOrConnectWithoutWorkflowInput | stepes_runCreateOrConnectWithoutWorkflowInput[]
    upsert?: stepes_runUpsertWithWhereUniqueWithoutWorkflowInput | stepes_runUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: stepes_runCreateManyWorkflowInputEnvelope
    set?: stepes_runWhereUniqueInput | stepes_runWhereUniqueInput[]
    disconnect?: stepes_runWhereUniqueInput | stepes_runWhereUniqueInput[]
    delete?: stepes_runWhereUniqueInput | stepes_runWhereUniqueInput[]
    connect?: stepes_runWhereUniqueInput | stepes_runWhereUniqueInput[]
    update?: stepes_runUpdateWithWhereUniqueWithoutWorkflowInput | stepes_runUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: stepes_runUpdateManyWithWhereWithoutWorkflowInput | stepes_runUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: stepes_runScalarWhereInput | stepes_runScalarWhereInput[]
  }

  export type typeofstepCreateNestedOneWithoutStepesInput = {
    create?: XOR<typeofstepCreateWithoutStepesInput, typeofstepUncheckedCreateWithoutStepesInput>
    connectOrCreate?: typeofstepCreateOrConnectWithoutStepesInput
    connect?: typeofstepWhereUniqueInput
  }

  export type userCreateNestedOneWithoutStepesInput = {
    create?: XOR<userCreateWithoutStepesInput, userUncheckedCreateWithoutStepesInput>
    connectOrCreate?: userCreateOrConnectWithoutStepesInput
    connect?: userWhereUniqueInput
  }

  export type workflowCreateNestedOneWithoutStepesInput = {
    create?: XOR<workflowCreateWithoutStepesInput, workflowUncheckedCreateWithoutStepesInput>
    connectOrCreate?: workflowCreateOrConnectWithoutStepesInput
    connect?: workflowWhereUniqueInput
  }

  export type stepes_runCreateNestedManyWithoutStepInput = {
    create?: XOR<stepes_runCreateWithoutStepInput, stepes_runUncheckedCreateWithoutStepInput> | stepes_runCreateWithoutStepInput[] | stepes_runUncheckedCreateWithoutStepInput[]
    connectOrCreate?: stepes_runCreateOrConnectWithoutStepInput | stepes_runCreateOrConnectWithoutStepInput[]
    createMany?: stepes_runCreateManyStepInputEnvelope
    connect?: stepes_runWhereUniqueInput | stepes_runWhereUniqueInput[]
  }

  export type stepes_runUncheckedCreateNestedManyWithoutStepInput = {
    create?: XOR<stepes_runCreateWithoutStepInput, stepes_runUncheckedCreateWithoutStepInput> | stepes_runCreateWithoutStepInput[] | stepes_runUncheckedCreateWithoutStepInput[]
    connectOrCreate?: stepes_runCreateOrConnectWithoutStepInput | stepes_runCreateOrConnectWithoutStepInput[]
    createMany?: stepes_runCreateManyStepInputEnvelope
    connect?: stepes_runWhereUniqueInput | stepes_runWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type typeofstepUpdateOneRequiredWithoutStepesNestedInput = {
    create?: XOR<typeofstepCreateWithoutStepesInput, typeofstepUncheckedCreateWithoutStepesInput>
    connectOrCreate?: typeofstepCreateOrConnectWithoutStepesInput
    upsert?: typeofstepUpsertWithoutStepesInput
    connect?: typeofstepWhereUniqueInput
    update?: XOR<XOR<typeofstepUpdateToOneWithWhereWithoutStepesInput, typeofstepUpdateWithoutStepesInput>, typeofstepUncheckedUpdateWithoutStepesInput>
  }

  export type userUpdateOneRequiredWithoutStepesNestedInput = {
    create?: XOR<userCreateWithoutStepesInput, userUncheckedCreateWithoutStepesInput>
    connectOrCreate?: userCreateOrConnectWithoutStepesInput
    upsert?: userUpsertWithoutStepesInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutStepesInput, userUpdateWithoutStepesInput>, userUncheckedUpdateWithoutStepesInput>
  }

  export type workflowUpdateOneRequiredWithoutStepesNestedInput = {
    create?: XOR<workflowCreateWithoutStepesInput, workflowUncheckedCreateWithoutStepesInput>
    connectOrCreate?: workflowCreateOrConnectWithoutStepesInput
    upsert?: workflowUpsertWithoutStepesInput
    connect?: workflowWhereUniqueInput
    update?: XOR<XOR<workflowUpdateToOneWithWhereWithoutStepesInput, workflowUpdateWithoutStepesInput>, workflowUncheckedUpdateWithoutStepesInput>
  }

  export type stepes_runUpdateManyWithoutStepNestedInput = {
    create?: XOR<stepes_runCreateWithoutStepInput, stepes_runUncheckedCreateWithoutStepInput> | stepes_runCreateWithoutStepInput[] | stepes_runUncheckedCreateWithoutStepInput[]
    connectOrCreate?: stepes_runCreateOrConnectWithoutStepInput | stepes_runCreateOrConnectWithoutStepInput[]
    upsert?: stepes_runUpsertWithWhereUniqueWithoutStepInput | stepes_runUpsertWithWhereUniqueWithoutStepInput[]
    createMany?: stepes_runCreateManyStepInputEnvelope
    set?: stepes_runWhereUniqueInput | stepes_runWhereUniqueInput[]
    disconnect?: stepes_runWhereUniqueInput | stepes_runWhereUniqueInput[]
    delete?: stepes_runWhereUniqueInput | stepes_runWhereUniqueInput[]
    connect?: stepes_runWhereUniqueInput | stepes_runWhereUniqueInput[]
    update?: stepes_runUpdateWithWhereUniqueWithoutStepInput | stepes_runUpdateWithWhereUniqueWithoutStepInput[]
    updateMany?: stepes_runUpdateManyWithWhereWithoutStepInput | stepes_runUpdateManyWithWhereWithoutStepInput[]
    deleteMany?: stepes_runScalarWhereInput | stepes_runScalarWhereInput[]
  }

  export type stepes_runUncheckedUpdateManyWithoutStepNestedInput = {
    create?: XOR<stepes_runCreateWithoutStepInput, stepes_runUncheckedCreateWithoutStepInput> | stepes_runCreateWithoutStepInput[] | stepes_runUncheckedCreateWithoutStepInput[]
    connectOrCreate?: stepes_runCreateOrConnectWithoutStepInput | stepes_runCreateOrConnectWithoutStepInput[]
    upsert?: stepes_runUpsertWithWhereUniqueWithoutStepInput | stepes_runUpsertWithWhereUniqueWithoutStepInput[]
    createMany?: stepes_runCreateManyStepInputEnvelope
    set?: stepes_runWhereUniqueInput | stepes_runWhereUniqueInput[]
    disconnect?: stepes_runWhereUniqueInput | stepes_runWhereUniqueInput[]
    delete?: stepes_runWhereUniqueInput | stepes_runWhereUniqueInput[]
    connect?: stepes_runWhereUniqueInput | stepes_runWhereUniqueInput[]
    update?: stepes_runUpdateWithWhereUniqueWithoutStepInput | stepes_runUpdateWithWhereUniqueWithoutStepInput[]
    updateMany?: stepes_runUpdateManyWithWhereWithoutStepInput | stepes_runUpdateManyWithWhereWithoutStepInput[]
    deleteMany?: stepes_runScalarWhereInput | stepes_runScalarWhereInput[]
  }

  export type stepCreateNestedOneWithoutStepes_runsInput = {
    create?: XOR<stepCreateWithoutStepes_runsInput, stepUncheckedCreateWithoutStepes_runsInput>
    connectOrCreate?: stepCreateOrConnectWithoutStepes_runsInput
    connect?: stepWhereUniqueInput
  }

  export type workflowCreateNestedOneWithoutStepes_runsInput = {
    create?: XOR<workflowCreateWithoutStepes_runsInput, workflowUncheckedCreateWithoutStepes_runsInput>
    connectOrCreate?: workflowCreateOrConnectWithoutStepes_runsInput
    connect?: workflowWhereUniqueInput
  }

  export type out_box_step_runCreateNestedManyWithoutStepes_runInput = {
    create?: XOR<out_box_step_runCreateWithoutStepes_runInput, out_box_step_runUncheckedCreateWithoutStepes_runInput> | out_box_step_runCreateWithoutStepes_runInput[] | out_box_step_runUncheckedCreateWithoutStepes_runInput[]
    connectOrCreate?: out_box_step_runCreateOrConnectWithoutStepes_runInput | out_box_step_runCreateOrConnectWithoutStepes_runInput[]
    createMany?: out_box_step_runCreateManyStepes_runInputEnvelope
    connect?: out_box_step_runWhereUniqueInput | out_box_step_runWhereUniqueInput[]
  }

  export type working_step_validatorCreateNestedManyWithoutStepes_runInput = {
    create?: XOR<working_step_validatorCreateWithoutStepes_runInput, working_step_validatorUncheckedCreateWithoutStepes_runInput> | working_step_validatorCreateWithoutStepes_runInput[] | working_step_validatorUncheckedCreateWithoutStepes_runInput[]
    connectOrCreate?: working_step_validatorCreateOrConnectWithoutStepes_runInput | working_step_validatorCreateOrConnectWithoutStepes_runInput[]
    createMany?: working_step_validatorCreateManyStepes_runInputEnvelope
    connect?: working_step_validatorWhereUniqueInput | working_step_validatorWhereUniqueInput[]
  }

  export type out_box_step_runUncheckedCreateNestedManyWithoutStepes_runInput = {
    create?: XOR<out_box_step_runCreateWithoutStepes_runInput, out_box_step_runUncheckedCreateWithoutStepes_runInput> | out_box_step_runCreateWithoutStepes_runInput[] | out_box_step_runUncheckedCreateWithoutStepes_runInput[]
    connectOrCreate?: out_box_step_runCreateOrConnectWithoutStepes_runInput | out_box_step_runCreateOrConnectWithoutStepes_runInput[]
    createMany?: out_box_step_runCreateManyStepes_runInputEnvelope
    connect?: out_box_step_runWhereUniqueInput | out_box_step_runWhereUniqueInput[]
  }

  export type working_step_validatorUncheckedCreateNestedManyWithoutStepes_runInput = {
    create?: XOR<working_step_validatorCreateWithoutStepes_runInput, working_step_validatorUncheckedCreateWithoutStepes_runInput> | working_step_validatorCreateWithoutStepes_runInput[] | working_step_validatorUncheckedCreateWithoutStepes_runInput[]
    connectOrCreate?: working_step_validatorCreateOrConnectWithoutStepes_runInput | working_step_validatorCreateOrConnectWithoutStepes_runInput[]
    createMany?: working_step_validatorCreateManyStepes_runInputEnvelope
    connect?: working_step_validatorWhereUniqueInput | working_step_validatorWhereUniqueInput[]
  }

  export type Enumworking_statusFieldUpdateOperationsInput = {
    set?: $Enums.working_status
  }

  export type stepUpdateOneRequiredWithoutStepes_runsNestedInput = {
    create?: XOR<stepCreateWithoutStepes_runsInput, stepUncheckedCreateWithoutStepes_runsInput>
    connectOrCreate?: stepCreateOrConnectWithoutStepes_runsInput
    upsert?: stepUpsertWithoutStepes_runsInput
    connect?: stepWhereUniqueInput
    update?: XOR<XOR<stepUpdateToOneWithWhereWithoutStepes_runsInput, stepUpdateWithoutStepes_runsInput>, stepUncheckedUpdateWithoutStepes_runsInput>
  }

  export type workflowUpdateOneRequiredWithoutStepes_runsNestedInput = {
    create?: XOR<workflowCreateWithoutStepes_runsInput, workflowUncheckedCreateWithoutStepes_runsInput>
    connectOrCreate?: workflowCreateOrConnectWithoutStepes_runsInput
    upsert?: workflowUpsertWithoutStepes_runsInput
    connect?: workflowWhereUniqueInput
    update?: XOR<XOR<workflowUpdateToOneWithWhereWithoutStepes_runsInput, workflowUpdateWithoutStepes_runsInput>, workflowUncheckedUpdateWithoutStepes_runsInput>
  }

  export type out_box_step_runUpdateManyWithoutStepes_runNestedInput = {
    create?: XOR<out_box_step_runCreateWithoutStepes_runInput, out_box_step_runUncheckedCreateWithoutStepes_runInput> | out_box_step_runCreateWithoutStepes_runInput[] | out_box_step_runUncheckedCreateWithoutStepes_runInput[]
    connectOrCreate?: out_box_step_runCreateOrConnectWithoutStepes_runInput | out_box_step_runCreateOrConnectWithoutStepes_runInput[]
    upsert?: out_box_step_runUpsertWithWhereUniqueWithoutStepes_runInput | out_box_step_runUpsertWithWhereUniqueWithoutStepes_runInput[]
    createMany?: out_box_step_runCreateManyStepes_runInputEnvelope
    set?: out_box_step_runWhereUniqueInput | out_box_step_runWhereUniqueInput[]
    disconnect?: out_box_step_runWhereUniqueInput | out_box_step_runWhereUniqueInput[]
    delete?: out_box_step_runWhereUniqueInput | out_box_step_runWhereUniqueInput[]
    connect?: out_box_step_runWhereUniqueInput | out_box_step_runWhereUniqueInput[]
    update?: out_box_step_runUpdateWithWhereUniqueWithoutStepes_runInput | out_box_step_runUpdateWithWhereUniqueWithoutStepes_runInput[]
    updateMany?: out_box_step_runUpdateManyWithWhereWithoutStepes_runInput | out_box_step_runUpdateManyWithWhereWithoutStepes_runInput[]
    deleteMany?: out_box_step_runScalarWhereInput | out_box_step_runScalarWhereInput[]
  }

  export type working_step_validatorUpdateManyWithoutStepes_runNestedInput = {
    create?: XOR<working_step_validatorCreateWithoutStepes_runInput, working_step_validatorUncheckedCreateWithoutStepes_runInput> | working_step_validatorCreateWithoutStepes_runInput[] | working_step_validatorUncheckedCreateWithoutStepes_runInput[]
    connectOrCreate?: working_step_validatorCreateOrConnectWithoutStepes_runInput | working_step_validatorCreateOrConnectWithoutStepes_runInput[]
    upsert?: working_step_validatorUpsertWithWhereUniqueWithoutStepes_runInput | working_step_validatorUpsertWithWhereUniqueWithoutStepes_runInput[]
    createMany?: working_step_validatorCreateManyStepes_runInputEnvelope
    set?: working_step_validatorWhereUniqueInput | working_step_validatorWhereUniqueInput[]
    disconnect?: working_step_validatorWhereUniqueInput | working_step_validatorWhereUniqueInput[]
    delete?: working_step_validatorWhereUniqueInput | working_step_validatorWhereUniqueInput[]
    connect?: working_step_validatorWhereUniqueInput | working_step_validatorWhereUniqueInput[]
    update?: working_step_validatorUpdateWithWhereUniqueWithoutStepes_runInput | working_step_validatorUpdateWithWhereUniqueWithoutStepes_runInput[]
    updateMany?: working_step_validatorUpdateManyWithWhereWithoutStepes_runInput | working_step_validatorUpdateManyWithWhereWithoutStepes_runInput[]
    deleteMany?: working_step_validatorScalarWhereInput | working_step_validatorScalarWhereInput[]
  }

  export type out_box_step_runUncheckedUpdateManyWithoutStepes_runNestedInput = {
    create?: XOR<out_box_step_runCreateWithoutStepes_runInput, out_box_step_runUncheckedCreateWithoutStepes_runInput> | out_box_step_runCreateWithoutStepes_runInput[] | out_box_step_runUncheckedCreateWithoutStepes_runInput[]
    connectOrCreate?: out_box_step_runCreateOrConnectWithoutStepes_runInput | out_box_step_runCreateOrConnectWithoutStepes_runInput[]
    upsert?: out_box_step_runUpsertWithWhereUniqueWithoutStepes_runInput | out_box_step_runUpsertWithWhereUniqueWithoutStepes_runInput[]
    createMany?: out_box_step_runCreateManyStepes_runInputEnvelope
    set?: out_box_step_runWhereUniqueInput | out_box_step_runWhereUniqueInput[]
    disconnect?: out_box_step_runWhereUniqueInput | out_box_step_runWhereUniqueInput[]
    delete?: out_box_step_runWhereUniqueInput | out_box_step_runWhereUniqueInput[]
    connect?: out_box_step_runWhereUniqueInput | out_box_step_runWhereUniqueInput[]
    update?: out_box_step_runUpdateWithWhereUniqueWithoutStepes_runInput | out_box_step_runUpdateWithWhereUniqueWithoutStepes_runInput[]
    updateMany?: out_box_step_runUpdateManyWithWhereWithoutStepes_runInput | out_box_step_runUpdateManyWithWhereWithoutStepes_runInput[]
    deleteMany?: out_box_step_runScalarWhereInput | out_box_step_runScalarWhereInput[]
  }

  export type working_step_validatorUncheckedUpdateManyWithoutStepes_runNestedInput = {
    create?: XOR<working_step_validatorCreateWithoutStepes_runInput, working_step_validatorUncheckedCreateWithoutStepes_runInput> | working_step_validatorCreateWithoutStepes_runInput[] | working_step_validatorUncheckedCreateWithoutStepes_runInput[]
    connectOrCreate?: working_step_validatorCreateOrConnectWithoutStepes_runInput | working_step_validatorCreateOrConnectWithoutStepes_runInput[]
    upsert?: working_step_validatorUpsertWithWhereUniqueWithoutStepes_runInput | working_step_validatorUpsertWithWhereUniqueWithoutStepes_runInput[]
    createMany?: working_step_validatorCreateManyStepes_runInputEnvelope
    set?: working_step_validatorWhereUniqueInput | working_step_validatorWhereUniqueInput[]
    disconnect?: working_step_validatorWhereUniqueInput | working_step_validatorWhereUniqueInput[]
    delete?: working_step_validatorWhereUniqueInput | working_step_validatorWhereUniqueInput[]
    connect?: working_step_validatorWhereUniqueInput | working_step_validatorWhereUniqueInput[]
    update?: working_step_validatorUpdateWithWhereUniqueWithoutStepes_runInput | working_step_validatorUpdateWithWhereUniqueWithoutStepes_runInput[]
    updateMany?: working_step_validatorUpdateManyWithWhereWithoutStepes_runInput | working_step_validatorUpdateManyWithWhereWithoutStepes_runInput[]
    deleteMany?: working_step_validatorScalarWhereInput | working_step_validatorScalarWhereInput[]
  }

  export type stepes_runCreateNestedOneWithoutOut_box_step_runInput = {
    create?: XOR<stepes_runCreateWithoutOut_box_step_runInput, stepes_runUncheckedCreateWithoutOut_box_step_runInput>
    connectOrCreate?: stepes_runCreateOrConnectWithoutOut_box_step_runInput
    connect?: stepes_runWhereUniqueInput
  }

  export type stepes_runUpdateOneRequiredWithoutOut_box_step_runNestedInput = {
    create?: XOR<stepes_runCreateWithoutOut_box_step_runInput, stepes_runUncheckedCreateWithoutOut_box_step_runInput>
    connectOrCreate?: stepes_runCreateOrConnectWithoutOut_box_step_runInput
    upsert?: stepes_runUpsertWithoutOut_box_step_runInput
    connect?: stepes_runWhereUniqueInput
    update?: XOR<XOR<stepes_runUpdateToOneWithWhereWithoutOut_box_step_runInput, stepes_runUpdateWithoutOut_box_step_runInput>, stepes_runUncheckedUpdateWithoutOut_box_step_runInput>
  }

  export type stepes_runCreateNestedOneWithoutWorking_step_validationInput = {
    create?: XOR<stepes_runCreateWithoutWorking_step_validationInput, stepes_runUncheckedCreateWithoutWorking_step_validationInput>
    connectOrCreate?: stepes_runCreateOrConnectWithoutWorking_step_validationInput
    connect?: stepes_runWhereUniqueInput
  }

  export type reseve_email_validatorCreateNestedManyWithoutWorking_step_validatorInput = {
    create?: XOR<reseve_email_validatorCreateWithoutWorking_step_validatorInput, reseve_email_validatorUncheckedCreateWithoutWorking_step_validatorInput> | reseve_email_validatorCreateWithoutWorking_step_validatorInput[] | reseve_email_validatorUncheckedCreateWithoutWorking_step_validatorInput[]
    connectOrCreate?: reseve_email_validatorCreateOrConnectWithoutWorking_step_validatorInput | reseve_email_validatorCreateOrConnectWithoutWorking_step_validatorInput[]
    createMany?: reseve_email_validatorCreateManyWorking_step_validatorInputEnvelope
    connect?: reseve_email_validatorWhereUniqueInput | reseve_email_validatorWhereUniqueInput[]
  }

  export type reseve_email_validatorUncheckedCreateNestedManyWithoutWorking_step_validatorInput = {
    create?: XOR<reseve_email_validatorCreateWithoutWorking_step_validatorInput, reseve_email_validatorUncheckedCreateWithoutWorking_step_validatorInput> | reseve_email_validatorCreateWithoutWorking_step_validatorInput[] | reseve_email_validatorUncheckedCreateWithoutWorking_step_validatorInput[]
    connectOrCreate?: reseve_email_validatorCreateOrConnectWithoutWorking_step_validatorInput | reseve_email_validatorCreateOrConnectWithoutWorking_step_validatorInput[]
    createMany?: reseve_email_validatorCreateManyWorking_step_validatorInputEnvelope
    connect?: reseve_email_validatorWhereUniqueInput | reseve_email_validatorWhereUniqueInput[]
  }

  export type Enumstep_validation_statusFieldUpdateOperationsInput = {
    set?: $Enums.step_validation_status
  }

  export type stepes_runUpdateOneRequiredWithoutWorking_step_validationNestedInput = {
    create?: XOR<stepes_runCreateWithoutWorking_step_validationInput, stepes_runUncheckedCreateWithoutWorking_step_validationInput>
    connectOrCreate?: stepes_runCreateOrConnectWithoutWorking_step_validationInput
    upsert?: stepes_runUpsertWithoutWorking_step_validationInput
    connect?: stepes_runWhereUniqueInput
    update?: XOR<XOR<stepes_runUpdateToOneWithWhereWithoutWorking_step_validationInput, stepes_runUpdateWithoutWorking_step_validationInput>, stepes_runUncheckedUpdateWithoutWorking_step_validationInput>
  }

  export type reseve_email_validatorUpdateManyWithoutWorking_step_validatorNestedInput = {
    create?: XOR<reseve_email_validatorCreateWithoutWorking_step_validatorInput, reseve_email_validatorUncheckedCreateWithoutWorking_step_validatorInput> | reseve_email_validatorCreateWithoutWorking_step_validatorInput[] | reseve_email_validatorUncheckedCreateWithoutWorking_step_validatorInput[]
    connectOrCreate?: reseve_email_validatorCreateOrConnectWithoutWorking_step_validatorInput | reseve_email_validatorCreateOrConnectWithoutWorking_step_validatorInput[]
    upsert?: reseve_email_validatorUpsertWithWhereUniqueWithoutWorking_step_validatorInput | reseve_email_validatorUpsertWithWhereUniqueWithoutWorking_step_validatorInput[]
    createMany?: reseve_email_validatorCreateManyWorking_step_validatorInputEnvelope
    set?: reseve_email_validatorWhereUniqueInput | reseve_email_validatorWhereUniqueInput[]
    disconnect?: reseve_email_validatorWhereUniqueInput | reseve_email_validatorWhereUniqueInput[]
    delete?: reseve_email_validatorWhereUniqueInput | reseve_email_validatorWhereUniqueInput[]
    connect?: reseve_email_validatorWhereUniqueInput | reseve_email_validatorWhereUniqueInput[]
    update?: reseve_email_validatorUpdateWithWhereUniqueWithoutWorking_step_validatorInput | reseve_email_validatorUpdateWithWhereUniqueWithoutWorking_step_validatorInput[]
    updateMany?: reseve_email_validatorUpdateManyWithWhereWithoutWorking_step_validatorInput | reseve_email_validatorUpdateManyWithWhereWithoutWorking_step_validatorInput[]
    deleteMany?: reseve_email_validatorScalarWhereInput | reseve_email_validatorScalarWhereInput[]
  }

  export type reseve_email_validatorUncheckedUpdateManyWithoutWorking_step_validatorNestedInput = {
    create?: XOR<reseve_email_validatorCreateWithoutWorking_step_validatorInput, reseve_email_validatorUncheckedCreateWithoutWorking_step_validatorInput> | reseve_email_validatorCreateWithoutWorking_step_validatorInput[] | reseve_email_validatorUncheckedCreateWithoutWorking_step_validatorInput[]
    connectOrCreate?: reseve_email_validatorCreateOrConnectWithoutWorking_step_validatorInput | reseve_email_validatorCreateOrConnectWithoutWorking_step_validatorInput[]
    upsert?: reseve_email_validatorUpsertWithWhereUniqueWithoutWorking_step_validatorInput | reseve_email_validatorUpsertWithWhereUniqueWithoutWorking_step_validatorInput[]
    createMany?: reseve_email_validatorCreateManyWorking_step_validatorInputEnvelope
    set?: reseve_email_validatorWhereUniqueInput | reseve_email_validatorWhereUniqueInput[]
    disconnect?: reseve_email_validatorWhereUniqueInput | reseve_email_validatorWhereUniqueInput[]
    delete?: reseve_email_validatorWhereUniqueInput | reseve_email_validatorWhereUniqueInput[]
    connect?: reseve_email_validatorWhereUniqueInput | reseve_email_validatorWhereUniqueInput[]
    update?: reseve_email_validatorUpdateWithWhereUniqueWithoutWorking_step_validatorInput | reseve_email_validatorUpdateWithWhereUniqueWithoutWorking_step_validatorInput[]
    updateMany?: reseve_email_validatorUpdateManyWithWhereWithoutWorking_step_validatorInput | reseve_email_validatorUpdateManyWithWhereWithoutWorking_step_validatorInput[]
    deleteMany?: reseve_email_validatorScalarWhereInput | reseve_email_validatorScalarWhereInput[]
  }

  export type working_step_validatorCreateNestedOneWithoutReseve_email_validatorInput = {
    create?: XOR<working_step_validatorCreateWithoutReseve_email_validatorInput, working_step_validatorUncheckedCreateWithoutReseve_email_validatorInput>
    connectOrCreate?: working_step_validatorCreateOrConnectWithoutReseve_email_validatorInput
    connect?: working_step_validatorWhereUniqueInput
  }

  export type working_step_validatorUpdateOneRequiredWithoutReseve_email_validatorNestedInput = {
    create?: XOR<working_step_validatorCreateWithoutReseve_email_validatorInput, working_step_validatorUncheckedCreateWithoutReseve_email_validatorInput>
    connectOrCreate?: working_step_validatorCreateOrConnectWithoutReseve_email_validatorInput
    upsert?: working_step_validatorUpsertWithoutReseve_email_validatorInput
    connect?: working_step_validatorWhereUniqueInput
    update?: XOR<XOR<working_step_validatorUpdateToOneWithWhereWithoutReseve_email_validatorInput, working_step_validatorUpdateWithoutReseve_email_validatorInput>, working_step_validatorUncheckedUpdateWithoutReseve_email_validatorInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumwork_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.work_type | Enumwork_typeFieldRefInput<$PrismaModel>
    in?: $Enums.work_type[] | ListEnumwork_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.work_type[] | ListEnumwork_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumwork_typeFilter<$PrismaModel> | $Enums.work_type
  }

  export type NestedEnumwork_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.work_type | Enumwork_typeFieldRefInput<$PrismaModel>
    in?: $Enums.work_type[] | ListEnumwork_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.work_type[] | ListEnumwork_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumwork_typeWithAggregatesFilter<$PrismaModel> | $Enums.work_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumwork_typeFilter<$PrismaModel>
    _max?: NestedEnumwork_typeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumstatusFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusFilter<$PrismaModel> | $Enums.status
  }

  export type NestedEnumstatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusWithAggregatesFilter<$PrismaModel> | $Enums.status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusFilter<$PrismaModel>
    _max?: NestedEnumstatusFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumworking_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.working_status | Enumworking_statusFieldRefInput<$PrismaModel>
    in?: $Enums.working_status[] | ListEnumworking_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.working_status[] | ListEnumworking_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumworking_statusFilter<$PrismaModel> | $Enums.working_status
  }

  export type NestedEnumworking_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.working_status | Enumworking_statusFieldRefInput<$PrismaModel>
    in?: $Enums.working_status[] | ListEnumworking_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.working_status[] | ListEnumworking_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumworking_statusWithAggregatesFilter<$PrismaModel> | $Enums.working_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumworking_statusFilter<$PrismaModel>
    _max?: NestedEnumworking_statusFilter<$PrismaModel>
  }

  export type NestedEnumstep_validation_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.step_validation_status | Enumstep_validation_statusFieldRefInput<$PrismaModel>
    in?: $Enums.step_validation_status[] | ListEnumstep_validation_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.step_validation_status[] | ListEnumstep_validation_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumstep_validation_statusFilter<$PrismaModel> | $Enums.step_validation_status
  }

  export type NestedEnumstep_validation_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.step_validation_status | Enumstep_validation_statusFieldRefInput<$PrismaModel>
    in?: $Enums.step_validation_status[] | ListEnumstep_validation_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.step_validation_status[] | ListEnumstep_validation_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumstep_validation_statusWithAggregatesFilter<$PrismaModel> | $Enums.step_validation_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstep_validation_statusFilter<$PrismaModel>
    _max?: NestedEnumstep_validation_statusFilter<$PrismaModel>
  }

  export type stepCreateWithoutUserInput = {
    name?: string | null
    index: number
    meta_data: JsonNullValueInput | InputJsonValue
    status: $Enums.status
    create_at: Date | string
    update_at?: Date | string
    typeofstep: typeofstepCreateNestedOneWithoutStepesInput
    workflow: workflowCreateNestedOneWithoutStepesInput
    stepes_runs?: stepes_runCreateNestedManyWithoutStepInput
  }

  export type stepUncheckedCreateWithoutUserInput = {
    id?: number
    name?: string | null
    index: number
    typeofstap_id: number
    workflow_id: number
    meta_data: JsonNullValueInput | InputJsonValue
    status: $Enums.status
    create_at: Date | string
    update_at?: Date | string
    stepes_runs?: stepes_runUncheckedCreateNestedManyWithoutStepInput
  }

  export type stepCreateOrConnectWithoutUserInput = {
    where: stepWhereUniqueInput
    create: XOR<stepCreateWithoutUserInput, stepUncheckedCreateWithoutUserInput>
  }

  export type stepCreateManyUserInputEnvelope = {
    data: stepCreateManyUserInput | stepCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type stepUpsertWithWhereUniqueWithoutUserInput = {
    where: stepWhereUniqueInput
    update: XOR<stepUpdateWithoutUserInput, stepUncheckedUpdateWithoutUserInput>
    create: XOR<stepCreateWithoutUserInput, stepUncheckedCreateWithoutUserInput>
  }

  export type stepUpdateWithWhereUniqueWithoutUserInput = {
    where: stepWhereUniqueInput
    data: XOR<stepUpdateWithoutUserInput, stepUncheckedUpdateWithoutUserInput>
  }

  export type stepUpdateManyWithWhereWithoutUserInput = {
    where: stepScalarWhereInput
    data: XOR<stepUpdateManyMutationInput, stepUncheckedUpdateManyWithoutUserInput>
  }

  export type stepScalarWhereInput = {
    AND?: stepScalarWhereInput | stepScalarWhereInput[]
    OR?: stepScalarWhereInput[]
    NOT?: stepScalarWhereInput | stepScalarWhereInput[]
    id?: IntFilter<"step"> | number
    name?: StringNullableFilter<"step"> | string | null
    index?: IntFilter<"step"> | number
    typeofstap_id?: IntFilter<"step"> | number
    user_id?: IntFilter<"step"> | number
    workflow_id?: IntFilter<"step"> | number
    meta_data?: JsonFilter<"step">
    status?: EnumstatusFilter<"step"> | $Enums.status
    create_at?: DateTimeFilter<"step"> | Date | string
    update_at?: DateTimeFilter<"step"> | Date | string
  }

  export type stepCreateWithoutTypeofstepInput = {
    name?: string | null
    index: number
    meta_data: JsonNullValueInput | InputJsonValue
    status: $Enums.status
    create_at: Date | string
    update_at?: Date | string
    user: userCreateNestedOneWithoutStepesInput
    workflow: workflowCreateNestedOneWithoutStepesInput
    stepes_runs?: stepes_runCreateNestedManyWithoutStepInput
  }

  export type stepUncheckedCreateWithoutTypeofstepInput = {
    id?: number
    name?: string | null
    index: number
    user_id: number
    workflow_id: number
    meta_data: JsonNullValueInput | InputJsonValue
    status: $Enums.status
    create_at: Date | string
    update_at?: Date | string
    stepes_runs?: stepes_runUncheckedCreateNestedManyWithoutStepInput
  }

  export type stepCreateOrConnectWithoutTypeofstepInput = {
    where: stepWhereUniqueInput
    create: XOR<stepCreateWithoutTypeofstepInput, stepUncheckedCreateWithoutTypeofstepInput>
  }

  export type stepCreateManyTypeofstepInputEnvelope = {
    data: stepCreateManyTypeofstepInput | stepCreateManyTypeofstepInput[]
    skipDuplicates?: boolean
  }

  export type stepUpsertWithWhereUniqueWithoutTypeofstepInput = {
    where: stepWhereUniqueInput
    update: XOR<stepUpdateWithoutTypeofstepInput, stepUncheckedUpdateWithoutTypeofstepInput>
    create: XOR<stepCreateWithoutTypeofstepInput, stepUncheckedCreateWithoutTypeofstepInput>
  }

  export type stepUpdateWithWhereUniqueWithoutTypeofstepInput = {
    where: stepWhereUniqueInput
    data: XOR<stepUpdateWithoutTypeofstepInput, stepUncheckedUpdateWithoutTypeofstepInput>
  }

  export type stepUpdateManyWithWhereWithoutTypeofstepInput = {
    where: stepScalarWhereInput
    data: XOR<stepUpdateManyMutationInput, stepUncheckedUpdateManyWithoutTypeofstepInput>
  }

  export type stepCreateWithoutWorkflowInput = {
    name?: string | null
    index: number
    meta_data: JsonNullValueInput | InputJsonValue
    status: $Enums.status
    create_at: Date | string
    update_at?: Date | string
    typeofstep: typeofstepCreateNestedOneWithoutStepesInput
    user: userCreateNestedOneWithoutStepesInput
    stepes_runs?: stepes_runCreateNestedManyWithoutStepInput
  }

  export type stepUncheckedCreateWithoutWorkflowInput = {
    id?: number
    name?: string | null
    index: number
    typeofstap_id: number
    user_id: number
    meta_data: JsonNullValueInput | InputJsonValue
    status: $Enums.status
    create_at: Date | string
    update_at?: Date | string
    stepes_runs?: stepes_runUncheckedCreateNestedManyWithoutStepInput
  }

  export type stepCreateOrConnectWithoutWorkflowInput = {
    where: stepWhereUniqueInput
    create: XOR<stepCreateWithoutWorkflowInput, stepUncheckedCreateWithoutWorkflowInput>
  }

  export type stepCreateManyWorkflowInputEnvelope = {
    data: stepCreateManyWorkflowInput | stepCreateManyWorkflowInput[]
    skipDuplicates?: boolean
  }

  export type stepes_runCreateWithoutWorkflowInput = {
    meta_data: JsonNullValueInput | InputJsonValue
    status: $Enums.working_status
    create_at: Date | string
    update_at?: Date | string
    step: stepCreateNestedOneWithoutStepes_runsInput
    out_box_step_run?: out_box_step_runCreateNestedManyWithoutStepes_runInput
    working_step_validation?: working_step_validatorCreateNestedManyWithoutStepes_runInput
  }

  export type stepes_runUncheckedCreateWithoutWorkflowInput = {
    id?: number
    meta_data: JsonNullValueInput | InputJsonValue
    status: $Enums.working_status
    step_id: number
    create_at: Date | string
    update_at?: Date | string
    out_box_step_run?: out_box_step_runUncheckedCreateNestedManyWithoutStepes_runInput
    working_step_validation?: working_step_validatorUncheckedCreateNestedManyWithoutStepes_runInput
  }

  export type stepes_runCreateOrConnectWithoutWorkflowInput = {
    where: stepes_runWhereUniqueInput
    create: XOR<stepes_runCreateWithoutWorkflowInput, stepes_runUncheckedCreateWithoutWorkflowInput>
  }

  export type stepes_runCreateManyWorkflowInputEnvelope = {
    data: stepes_runCreateManyWorkflowInput | stepes_runCreateManyWorkflowInput[]
    skipDuplicates?: boolean
  }

  export type stepUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: stepWhereUniqueInput
    update: XOR<stepUpdateWithoutWorkflowInput, stepUncheckedUpdateWithoutWorkflowInput>
    create: XOR<stepCreateWithoutWorkflowInput, stepUncheckedCreateWithoutWorkflowInput>
  }

  export type stepUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: stepWhereUniqueInput
    data: XOR<stepUpdateWithoutWorkflowInput, stepUncheckedUpdateWithoutWorkflowInput>
  }

  export type stepUpdateManyWithWhereWithoutWorkflowInput = {
    where: stepScalarWhereInput
    data: XOR<stepUpdateManyMutationInput, stepUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type stepes_runUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: stepes_runWhereUniqueInput
    update: XOR<stepes_runUpdateWithoutWorkflowInput, stepes_runUncheckedUpdateWithoutWorkflowInput>
    create: XOR<stepes_runCreateWithoutWorkflowInput, stepes_runUncheckedCreateWithoutWorkflowInput>
  }

  export type stepes_runUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: stepes_runWhereUniqueInput
    data: XOR<stepes_runUpdateWithoutWorkflowInput, stepes_runUncheckedUpdateWithoutWorkflowInput>
  }

  export type stepes_runUpdateManyWithWhereWithoutWorkflowInput = {
    where: stepes_runScalarWhereInput
    data: XOR<stepes_runUpdateManyMutationInput, stepes_runUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type stepes_runScalarWhereInput = {
    AND?: stepes_runScalarWhereInput | stepes_runScalarWhereInput[]
    OR?: stepes_runScalarWhereInput[]
    NOT?: stepes_runScalarWhereInput | stepes_runScalarWhereInput[]
    id?: IntFilter<"stepes_run"> | number
    meta_data?: JsonFilter<"stepes_run">
    status?: Enumworking_statusFilter<"stepes_run"> | $Enums.working_status
    step_id?: IntFilter<"stepes_run"> | number
    workflow_id?: IntFilter<"stepes_run"> | number
    create_at?: DateTimeFilter<"stepes_run"> | Date | string
    update_at?: DateTimeFilter<"stepes_run"> | Date | string
  }

  export type typeofstepCreateWithoutStepesInput = {
    name: string
    app: string
    work_type: $Enums.work_type
    meta_data: JsonNullValueInput | InputJsonValue
    image_url: string
    create_at: Date | string
    update_at?: Date | string
  }

  export type typeofstepUncheckedCreateWithoutStepesInput = {
    id?: number
    name: string
    app: string
    work_type: $Enums.work_type
    meta_data: JsonNullValueInput | InputJsonValue
    image_url: string
    create_at: Date | string
    update_at?: Date | string
  }

  export type typeofstepCreateOrConnectWithoutStepesInput = {
    where: typeofstepWhereUniqueInput
    create: XOR<typeofstepCreateWithoutStepesInput, typeofstepUncheckedCreateWithoutStepesInput>
  }

  export type userCreateWithoutStepesInput = {
    name: string
    email: string
    password: string
    is_active: boolean
    create_at: Date | string
    update_at?: Date | string
  }

  export type userUncheckedCreateWithoutStepesInput = {
    id?: number
    name: string
    email: string
    password: string
    is_active: boolean
    create_at: Date | string
    update_at?: Date | string
  }

  export type userCreateOrConnectWithoutStepesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutStepesInput, userUncheckedCreateWithoutStepesInput>
  }

  export type workflowCreateWithoutStepesInput = {
    name: string
    status: $Enums.status
    create_at: Date | string
    update_at?: Date | string
    stepes_runs?: stepes_runCreateNestedManyWithoutWorkflowInput
  }

  export type workflowUncheckedCreateWithoutStepesInput = {
    id?: number
    name: string
    status: $Enums.status
    create_at: Date | string
    update_at?: Date | string
    stepes_runs?: stepes_runUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type workflowCreateOrConnectWithoutStepesInput = {
    where: workflowWhereUniqueInput
    create: XOR<workflowCreateWithoutStepesInput, workflowUncheckedCreateWithoutStepesInput>
  }

  export type stepes_runCreateWithoutStepInput = {
    meta_data: JsonNullValueInput | InputJsonValue
    status: $Enums.working_status
    create_at: Date | string
    update_at?: Date | string
    workflow: workflowCreateNestedOneWithoutStepes_runsInput
    out_box_step_run?: out_box_step_runCreateNestedManyWithoutStepes_runInput
    working_step_validation?: working_step_validatorCreateNestedManyWithoutStepes_runInput
  }

  export type stepes_runUncheckedCreateWithoutStepInput = {
    id?: number
    meta_data: JsonNullValueInput | InputJsonValue
    status: $Enums.working_status
    workflow_id: number
    create_at: Date | string
    update_at?: Date | string
    out_box_step_run?: out_box_step_runUncheckedCreateNestedManyWithoutStepes_runInput
    working_step_validation?: working_step_validatorUncheckedCreateNestedManyWithoutStepes_runInput
  }

  export type stepes_runCreateOrConnectWithoutStepInput = {
    where: stepes_runWhereUniqueInput
    create: XOR<stepes_runCreateWithoutStepInput, stepes_runUncheckedCreateWithoutStepInput>
  }

  export type stepes_runCreateManyStepInputEnvelope = {
    data: stepes_runCreateManyStepInput | stepes_runCreateManyStepInput[]
    skipDuplicates?: boolean
  }

  export type typeofstepUpsertWithoutStepesInput = {
    update: XOR<typeofstepUpdateWithoutStepesInput, typeofstepUncheckedUpdateWithoutStepesInput>
    create: XOR<typeofstepCreateWithoutStepesInput, typeofstepUncheckedCreateWithoutStepesInput>
    where?: typeofstepWhereInput
  }

  export type typeofstepUpdateToOneWithWhereWithoutStepesInput = {
    where?: typeofstepWhereInput
    data: XOR<typeofstepUpdateWithoutStepesInput, typeofstepUncheckedUpdateWithoutStepesInput>
  }

  export type typeofstepUpdateWithoutStepesInput = {
    name?: StringFieldUpdateOperationsInput | string
    app?: StringFieldUpdateOperationsInput | string
    work_type?: Enumwork_typeFieldUpdateOperationsInput | $Enums.work_type
    meta_data?: JsonNullValueInput | InputJsonValue
    image_url?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type typeofstepUncheckedUpdateWithoutStepesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    app?: StringFieldUpdateOperationsInput | string
    work_type?: Enumwork_typeFieldUpdateOperationsInput | $Enums.work_type
    meta_data?: JsonNullValueInput | InputJsonValue
    image_url?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUpsertWithoutStepesInput = {
    update: XOR<userUpdateWithoutStepesInput, userUncheckedUpdateWithoutStepesInput>
    create: XOR<userCreateWithoutStepesInput, userUncheckedCreateWithoutStepesInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutStepesInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutStepesInput, userUncheckedUpdateWithoutStepesInput>
  }

  export type userUpdateWithoutStepesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateWithoutStepesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type workflowUpsertWithoutStepesInput = {
    update: XOR<workflowUpdateWithoutStepesInput, workflowUncheckedUpdateWithoutStepesInput>
    create: XOR<workflowCreateWithoutStepesInput, workflowUncheckedCreateWithoutStepesInput>
    where?: workflowWhereInput
  }

  export type workflowUpdateToOneWithWhereWithoutStepesInput = {
    where?: workflowWhereInput
    data: XOR<workflowUpdateWithoutStepesInput, workflowUncheckedUpdateWithoutStepesInput>
  }

  export type workflowUpdateWithoutStepesInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    stepes_runs?: stepes_runUpdateManyWithoutWorkflowNestedInput
  }

  export type workflowUncheckedUpdateWithoutStepesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    stepes_runs?: stepes_runUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type stepes_runUpsertWithWhereUniqueWithoutStepInput = {
    where: stepes_runWhereUniqueInput
    update: XOR<stepes_runUpdateWithoutStepInput, stepes_runUncheckedUpdateWithoutStepInput>
    create: XOR<stepes_runCreateWithoutStepInput, stepes_runUncheckedCreateWithoutStepInput>
  }

  export type stepes_runUpdateWithWhereUniqueWithoutStepInput = {
    where: stepes_runWhereUniqueInput
    data: XOR<stepes_runUpdateWithoutStepInput, stepes_runUncheckedUpdateWithoutStepInput>
  }

  export type stepes_runUpdateManyWithWhereWithoutStepInput = {
    where: stepes_runScalarWhereInput
    data: XOR<stepes_runUpdateManyMutationInput, stepes_runUncheckedUpdateManyWithoutStepInput>
  }

  export type stepCreateWithoutStepes_runsInput = {
    name?: string | null
    index: number
    meta_data: JsonNullValueInput | InputJsonValue
    status: $Enums.status
    create_at: Date | string
    update_at?: Date | string
    typeofstep: typeofstepCreateNestedOneWithoutStepesInput
    user: userCreateNestedOneWithoutStepesInput
    workflow: workflowCreateNestedOneWithoutStepesInput
  }

  export type stepUncheckedCreateWithoutStepes_runsInput = {
    id?: number
    name?: string | null
    index: number
    typeofstap_id: number
    user_id: number
    workflow_id: number
    meta_data: JsonNullValueInput | InputJsonValue
    status: $Enums.status
    create_at: Date | string
    update_at?: Date | string
  }

  export type stepCreateOrConnectWithoutStepes_runsInput = {
    where: stepWhereUniqueInput
    create: XOR<stepCreateWithoutStepes_runsInput, stepUncheckedCreateWithoutStepes_runsInput>
  }

  export type workflowCreateWithoutStepes_runsInput = {
    name: string
    status: $Enums.status
    create_at: Date | string
    update_at?: Date | string
    stepes?: stepCreateNestedManyWithoutWorkflowInput
  }

  export type workflowUncheckedCreateWithoutStepes_runsInput = {
    id?: number
    name: string
    status: $Enums.status
    create_at: Date | string
    update_at?: Date | string
    stepes?: stepUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type workflowCreateOrConnectWithoutStepes_runsInput = {
    where: workflowWhereUniqueInput
    create: XOR<workflowCreateWithoutStepes_runsInput, workflowUncheckedCreateWithoutStepes_runsInput>
  }

  export type out_box_step_runCreateWithoutStepes_runInput = {
    create_at: Date | string
    update_at?: Date | string
  }

  export type out_box_step_runUncheckedCreateWithoutStepes_runInput = {
    id?: number
    create_at: Date | string
    update_at?: Date | string
  }

  export type out_box_step_runCreateOrConnectWithoutStepes_runInput = {
    where: out_box_step_runWhereUniqueInput
    create: XOR<out_box_step_runCreateWithoutStepes_runInput, out_box_step_runUncheckedCreateWithoutStepes_runInput>
  }

  export type out_box_step_runCreateManyStepes_runInputEnvelope = {
    data: out_box_step_runCreateManyStepes_runInput | out_box_step_runCreateManyStepes_runInput[]
    skipDuplicates?: boolean
  }

  export type working_step_validatorCreateWithoutStepes_runInput = {
    email?: string | null
    message_id?: string | null
    index: number
    status: $Enums.step_validation_status
    create_at: Date | string
    update_at?: Date | string
    reseve_email_validator?: reseve_email_validatorCreateNestedManyWithoutWorking_step_validatorInput
  }

  export type working_step_validatorUncheckedCreateWithoutStepes_runInput = {
    id?: number
    email?: string | null
    message_id?: string | null
    index: number
    status: $Enums.step_validation_status
    create_at: Date | string
    update_at?: Date | string
    reseve_email_validator?: reseve_email_validatorUncheckedCreateNestedManyWithoutWorking_step_validatorInput
  }

  export type working_step_validatorCreateOrConnectWithoutStepes_runInput = {
    where: working_step_validatorWhereUniqueInput
    create: XOR<working_step_validatorCreateWithoutStepes_runInput, working_step_validatorUncheckedCreateWithoutStepes_runInput>
  }

  export type working_step_validatorCreateManyStepes_runInputEnvelope = {
    data: working_step_validatorCreateManyStepes_runInput | working_step_validatorCreateManyStepes_runInput[]
    skipDuplicates?: boolean
  }

  export type stepUpsertWithoutStepes_runsInput = {
    update: XOR<stepUpdateWithoutStepes_runsInput, stepUncheckedUpdateWithoutStepes_runsInput>
    create: XOR<stepCreateWithoutStepes_runsInput, stepUncheckedCreateWithoutStepes_runsInput>
    where?: stepWhereInput
  }

  export type stepUpdateToOneWithWhereWithoutStepes_runsInput = {
    where?: stepWhereInput
    data: XOR<stepUpdateWithoutStepes_runsInput, stepUncheckedUpdateWithoutStepes_runsInput>
  }

  export type stepUpdateWithoutStepes_runsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    index?: IntFieldUpdateOperationsInput | number
    meta_data?: JsonNullValueInput | InputJsonValue
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    typeofstep?: typeofstepUpdateOneRequiredWithoutStepesNestedInput
    user?: userUpdateOneRequiredWithoutStepesNestedInput
    workflow?: workflowUpdateOneRequiredWithoutStepesNestedInput
  }

  export type stepUncheckedUpdateWithoutStepes_runsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    index?: IntFieldUpdateOperationsInput | number
    typeofstap_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    workflow_id?: IntFieldUpdateOperationsInput | number
    meta_data?: JsonNullValueInput | InputJsonValue
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type workflowUpsertWithoutStepes_runsInput = {
    update: XOR<workflowUpdateWithoutStepes_runsInput, workflowUncheckedUpdateWithoutStepes_runsInput>
    create: XOR<workflowCreateWithoutStepes_runsInput, workflowUncheckedCreateWithoutStepes_runsInput>
    where?: workflowWhereInput
  }

  export type workflowUpdateToOneWithWhereWithoutStepes_runsInput = {
    where?: workflowWhereInput
    data: XOR<workflowUpdateWithoutStepes_runsInput, workflowUncheckedUpdateWithoutStepes_runsInput>
  }

  export type workflowUpdateWithoutStepes_runsInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    stepes?: stepUpdateManyWithoutWorkflowNestedInput
  }

  export type workflowUncheckedUpdateWithoutStepes_runsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    stepes?: stepUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type out_box_step_runUpsertWithWhereUniqueWithoutStepes_runInput = {
    where: out_box_step_runWhereUniqueInput
    update: XOR<out_box_step_runUpdateWithoutStepes_runInput, out_box_step_runUncheckedUpdateWithoutStepes_runInput>
    create: XOR<out_box_step_runCreateWithoutStepes_runInput, out_box_step_runUncheckedCreateWithoutStepes_runInput>
  }

  export type out_box_step_runUpdateWithWhereUniqueWithoutStepes_runInput = {
    where: out_box_step_runWhereUniqueInput
    data: XOR<out_box_step_runUpdateWithoutStepes_runInput, out_box_step_runUncheckedUpdateWithoutStepes_runInput>
  }

  export type out_box_step_runUpdateManyWithWhereWithoutStepes_runInput = {
    where: out_box_step_runScalarWhereInput
    data: XOR<out_box_step_runUpdateManyMutationInput, out_box_step_runUncheckedUpdateManyWithoutStepes_runInput>
  }

  export type out_box_step_runScalarWhereInput = {
    AND?: out_box_step_runScalarWhereInput | out_box_step_runScalarWhereInput[]
    OR?: out_box_step_runScalarWhereInput[]
    NOT?: out_box_step_runScalarWhereInput | out_box_step_runScalarWhereInput[]
    id?: IntFilter<"out_box_step_run"> | number
    stepes_run_id?: IntFilter<"out_box_step_run"> | number
    create_at?: DateTimeFilter<"out_box_step_run"> | Date | string
    update_at?: DateTimeFilter<"out_box_step_run"> | Date | string
  }

  export type working_step_validatorUpsertWithWhereUniqueWithoutStepes_runInput = {
    where: working_step_validatorWhereUniqueInput
    update: XOR<working_step_validatorUpdateWithoutStepes_runInput, working_step_validatorUncheckedUpdateWithoutStepes_runInput>
    create: XOR<working_step_validatorCreateWithoutStepes_runInput, working_step_validatorUncheckedCreateWithoutStepes_runInput>
  }

  export type working_step_validatorUpdateWithWhereUniqueWithoutStepes_runInput = {
    where: working_step_validatorWhereUniqueInput
    data: XOR<working_step_validatorUpdateWithoutStepes_runInput, working_step_validatorUncheckedUpdateWithoutStepes_runInput>
  }

  export type working_step_validatorUpdateManyWithWhereWithoutStepes_runInput = {
    where: working_step_validatorScalarWhereInput
    data: XOR<working_step_validatorUpdateManyMutationInput, working_step_validatorUncheckedUpdateManyWithoutStepes_runInput>
  }

  export type working_step_validatorScalarWhereInput = {
    AND?: working_step_validatorScalarWhereInput | working_step_validatorScalarWhereInput[]
    OR?: working_step_validatorScalarWhereInput[]
    NOT?: working_step_validatorScalarWhereInput | working_step_validatorScalarWhereInput[]
    id?: IntFilter<"working_step_validator"> | number
    stepes_run_id?: IntFilter<"working_step_validator"> | number
    email?: StringNullableFilter<"working_step_validator"> | string | null
    message_id?: StringNullableFilter<"working_step_validator"> | string | null
    index?: IntFilter<"working_step_validator"> | number
    status?: Enumstep_validation_statusFilter<"working_step_validator"> | $Enums.step_validation_status
    create_at?: DateTimeFilter<"working_step_validator"> | Date | string
    update_at?: DateTimeFilter<"working_step_validator"> | Date | string
  }

  export type stepes_runCreateWithoutOut_box_step_runInput = {
    meta_data: JsonNullValueInput | InputJsonValue
    status: $Enums.working_status
    create_at: Date | string
    update_at?: Date | string
    step: stepCreateNestedOneWithoutStepes_runsInput
    workflow: workflowCreateNestedOneWithoutStepes_runsInput
    working_step_validation?: working_step_validatorCreateNestedManyWithoutStepes_runInput
  }

  export type stepes_runUncheckedCreateWithoutOut_box_step_runInput = {
    id?: number
    meta_data: JsonNullValueInput | InputJsonValue
    status: $Enums.working_status
    step_id: number
    workflow_id: number
    create_at: Date | string
    update_at?: Date | string
    working_step_validation?: working_step_validatorUncheckedCreateNestedManyWithoutStepes_runInput
  }

  export type stepes_runCreateOrConnectWithoutOut_box_step_runInput = {
    where: stepes_runWhereUniqueInput
    create: XOR<stepes_runCreateWithoutOut_box_step_runInput, stepes_runUncheckedCreateWithoutOut_box_step_runInput>
  }

  export type stepes_runUpsertWithoutOut_box_step_runInput = {
    update: XOR<stepes_runUpdateWithoutOut_box_step_runInput, stepes_runUncheckedUpdateWithoutOut_box_step_runInput>
    create: XOR<stepes_runCreateWithoutOut_box_step_runInput, stepes_runUncheckedCreateWithoutOut_box_step_runInput>
    where?: stepes_runWhereInput
  }

  export type stepes_runUpdateToOneWithWhereWithoutOut_box_step_runInput = {
    where?: stepes_runWhereInput
    data: XOR<stepes_runUpdateWithoutOut_box_step_runInput, stepes_runUncheckedUpdateWithoutOut_box_step_runInput>
  }

  export type stepes_runUpdateWithoutOut_box_step_runInput = {
    meta_data?: JsonNullValueInput | InputJsonValue
    status?: Enumworking_statusFieldUpdateOperationsInput | $Enums.working_status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    step?: stepUpdateOneRequiredWithoutStepes_runsNestedInput
    workflow?: workflowUpdateOneRequiredWithoutStepes_runsNestedInput
    working_step_validation?: working_step_validatorUpdateManyWithoutStepes_runNestedInput
  }

  export type stepes_runUncheckedUpdateWithoutOut_box_step_runInput = {
    id?: IntFieldUpdateOperationsInput | number
    meta_data?: JsonNullValueInput | InputJsonValue
    status?: Enumworking_statusFieldUpdateOperationsInput | $Enums.working_status
    step_id?: IntFieldUpdateOperationsInput | number
    workflow_id?: IntFieldUpdateOperationsInput | number
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    working_step_validation?: working_step_validatorUncheckedUpdateManyWithoutStepes_runNestedInput
  }

  export type stepes_runCreateWithoutWorking_step_validationInput = {
    meta_data: JsonNullValueInput | InputJsonValue
    status: $Enums.working_status
    create_at: Date | string
    update_at?: Date | string
    step: stepCreateNestedOneWithoutStepes_runsInput
    workflow: workflowCreateNestedOneWithoutStepes_runsInput
    out_box_step_run?: out_box_step_runCreateNestedManyWithoutStepes_runInput
  }

  export type stepes_runUncheckedCreateWithoutWorking_step_validationInput = {
    id?: number
    meta_data: JsonNullValueInput | InputJsonValue
    status: $Enums.working_status
    step_id: number
    workflow_id: number
    create_at: Date | string
    update_at?: Date | string
    out_box_step_run?: out_box_step_runUncheckedCreateNestedManyWithoutStepes_runInput
  }

  export type stepes_runCreateOrConnectWithoutWorking_step_validationInput = {
    where: stepes_runWhereUniqueInput
    create: XOR<stepes_runCreateWithoutWorking_step_validationInput, stepes_runUncheckedCreateWithoutWorking_step_validationInput>
  }

  export type reseve_email_validatorCreateWithoutWorking_step_validatorInput = {
    status: $Enums.working_status
    create_at: Date | string
    update_at?: Date | string
  }

  export type reseve_email_validatorUncheckedCreateWithoutWorking_step_validatorInput = {
    id?: number
    status: $Enums.working_status
    create_at: Date | string
    update_at?: Date | string
  }

  export type reseve_email_validatorCreateOrConnectWithoutWorking_step_validatorInput = {
    where: reseve_email_validatorWhereUniqueInput
    create: XOR<reseve_email_validatorCreateWithoutWorking_step_validatorInput, reseve_email_validatorUncheckedCreateWithoutWorking_step_validatorInput>
  }

  export type reseve_email_validatorCreateManyWorking_step_validatorInputEnvelope = {
    data: reseve_email_validatorCreateManyWorking_step_validatorInput | reseve_email_validatorCreateManyWorking_step_validatorInput[]
    skipDuplicates?: boolean
  }

  export type stepes_runUpsertWithoutWorking_step_validationInput = {
    update: XOR<stepes_runUpdateWithoutWorking_step_validationInput, stepes_runUncheckedUpdateWithoutWorking_step_validationInput>
    create: XOR<stepes_runCreateWithoutWorking_step_validationInput, stepes_runUncheckedCreateWithoutWorking_step_validationInput>
    where?: stepes_runWhereInput
  }

  export type stepes_runUpdateToOneWithWhereWithoutWorking_step_validationInput = {
    where?: stepes_runWhereInput
    data: XOR<stepes_runUpdateWithoutWorking_step_validationInput, stepes_runUncheckedUpdateWithoutWorking_step_validationInput>
  }

  export type stepes_runUpdateWithoutWorking_step_validationInput = {
    meta_data?: JsonNullValueInput | InputJsonValue
    status?: Enumworking_statusFieldUpdateOperationsInput | $Enums.working_status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    step?: stepUpdateOneRequiredWithoutStepes_runsNestedInput
    workflow?: workflowUpdateOneRequiredWithoutStepes_runsNestedInput
    out_box_step_run?: out_box_step_runUpdateManyWithoutStepes_runNestedInput
  }

  export type stepes_runUncheckedUpdateWithoutWorking_step_validationInput = {
    id?: IntFieldUpdateOperationsInput | number
    meta_data?: JsonNullValueInput | InputJsonValue
    status?: Enumworking_statusFieldUpdateOperationsInput | $Enums.working_status
    step_id?: IntFieldUpdateOperationsInput | number
    workflow_id?: IntFieldUpdateOperationsInput | number
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    out_box_step_run?: out_box_step_runUncheckedUpdateManyWithoutStepes_runNestedInput
  }

  export type reseve_email_validatorUpsertWithWhereUniqueWithoutWorking_step_validatorInput = {
    where: reseve_email_validatorWhereUniqueInput
    update: XOR<reseve_email_validatorUpdateWithoutWorking_step_validatorInput, reseve_email_validatorUncheckedUpdateWithoutWorking_step_validatorInput>
    create: XOR<reseve_email_validatorCreateWithoutWorking_step_validatorInput, reseve_email_validatorUncheckedCreateWithoutWorking_step_validatorInput>
  }

  export type reseve_email_validatorUpdateWithWhereUniqueWithoutWorking_step_validatorInput = {
    where: reseve_email_validatorWhereUniqueInput
    data: XOR<reseve_email_validatorUpdateWithoutWorking_step_validatorInput, reseve_email_validatorUncheckedUpdateWithoutWorking_step_validatorInput>
  }

  export type reseve_email_validatorUpdateManyWithWhereWithoutWorking_step_validatorInput = {
    where: reseve_email_validatorScalarWhereInput
    data: XOR<reseve_email_validatorUpdateManyMutationInput, reseve_email_validatorUncheckedUpdateManyWithoutWorking_step_validatorInput>
  }

  export type reseve_email_validatorScalarWhereInput = {
    AND?: reseve_email_validatorScalarWhereInput | reseve_email_validatorScalarWhereInput[]
    OR?: reseve_email_validatorScalarWhereInput[]
    NOT?: reseve_email_validatorScalarWhereInput | reseve_email_validatorScalarWhereInput[]
    id?: IntFilter<"reseve_email_validator"> | number
    working_step_validator_id?: IntFilter<"reseve_email_validator"> | number
    status?: Enumworking_statusFilter<"reseve_email_validator"> | $Enums.working_status
    create_at?: DateTimeFilter<"reseve_email_validator"> | Date | string
    update_at?: DateTimeFilter<"reseve_email_validator"> | Date | string
  }

  export type working_step_validatorCreateWithoutReseve_email_validatorInput = {
    email?: string | null
    message_id?: string | null
    index: number
    status: $Enums.step_validation_status
    create_at: Date | string
    update_at?: Date | string
    stepes_run: stepes_runCreateNestedOneWithoutWorking_step_validationInput
  }

  export type working_step_validatorUncheckedCreateWithoutReseve_email_validatorInput = {
    id?: number
    stepes_run_id: number
    email?: string | null
    message_id?: string | null
    index: number
    status: $Enums.step_validation_status
    create_at: Date | string
    update_at?: Date | string
  }

  export type working_step_validatorCreateOrConnectWithoutReseve_email_validatorInput = {
    where: working_step_validatorWhereUniqueInput
    create: XOR<working_step_validatorCreateWithoutReseve_email_validatorInput, working_step_validatorUncheckedCreateWithoutReseve_email_validatorInput>
  }

  export type working_step_validatorUpsertWithoutReseve_email_validatorInput = {
    update: XOR<working_step_validatorUpdateWithoutReseve_email_validatorInput, working_step_validatorUncheckedUpdateWithoutReseve_email_validatorInput>
    create: XOR<working_step_validatorCreateWithoutReseve_email_validatorInput, working_step_validatorUncheckedCreateWithoutReseve_email_validatorInput>
    where?: working_step_validatorWhereInput
  }

  export type working_step_validatorUpdateToOneWithWhereWithoutReseve_email_validatorInput = {
    where?: working_step_validatorWhereInput
    data: XOR<working_step_validatorUpdateWithoutReseve_email_validatorInput, working_step_validatorUncheckedUpdateWithoutReseve_email_validatorInput>
  }

  export type working_step_validatorUpdateWithoutReseve_email_validatorInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    index?: IntFieldUpdateOperationsInput | number
    status?: Enumstep_validation_statusFieldUpdateOperationsInput | $Enums.step_validation_status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    stepes_run?: stepes_runUpdateOneRequiredWithoutWorking_step_validationNestedInput
  }

  export type working_step_validatorUncheckedUpdateWithoutReseve_email_validatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    stepes_run_id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    index?: IntFieldUpdateOperationsInput | number
    status?: Enumstep_validation_statusFieldUpdateOperationsInput | $Enums.step_validation_status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type stepCreateManyUserInput = {
    id?: number
    name?: string | null
    index: number
    typeofstap_id: number
    workflow_id: number
    meta_data: JsonNullValueInput | InputJsonValue
    status: $Enums.status
    create_at: Date | string
    update_at?: Date | string
  }

  export type stepUpdateWithoutUserInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    index?: IntFieldUpdateOperationsInput | number
    meta_data?: JsonNullValueInput | InputJsonValue
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    typeofstep?: typeofstepUpdateOneRequiredWithoutStepesNestedInput
    workflow?: workflowUpdateOneRequiredWithoutStepesNestedInput
    stepes_runs?: stepes_runUpdateManyWithoutStepNestedInput
  }

  export type stepUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    index?: IntFieldUpdateOperationsInput | number
    typeofstap_id?: IntFieldUpdateOperationsInput | number
    workflow_id?: IntFieldUpdateOperationsInput | number
    meta_data?: JsonNullValueInput | InputJsonValue
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    stepes_runs?: stepes_runUncheckedUpdateManyWithoutStepNestedInput
  }

  export type stepUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    index?: IntFieldUpdateOperationsInput | number
    typeofstap_id?: IntFieldUpdateOperationsInput | number
    workflow_id?: IntFieldUpdateOperationsInput | number
    meta_data?: JsonNullValueInput | InputJsonValue
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type stepCreateManyTypeofstepInput = {
    id?: number
    name?: string | null
    index: number
    user_id: number
    workflow_id: number
    meta_data: JsonNullValueInput | InputJsonValue
    status: $Enums.status
    create_at: Date | string
    update_at?: Date | string
  }

  export type stepUpdateWithoutTypeofstepInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    index?: IntFieldUpdateOperationsInput | number
    meta_data?: JsonNullValueInput | InputJsonValue
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutStepesNestedInput
    workflow?: workflowUpdateOneRequiredWithoutStepesNestedInput
    stepes_runs?: stepes_runUpdateManyWithoutStepNestedInput
  }

  export type stepUncheckedUpdateWithoutTypeofstepInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    index?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    workflow_id?: IntFieldUpdateOperationsInput | number
    meta_data?: JsonNullValueInput | InputJsonValue
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    stepes_runs?: stepes_runUncheckedUpdateManyWithoutStepNestedInput
  }

  export type stepUncheckedUpdateManyWithoutTypeofstepInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    index?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    workflow_id?: IntFieldUpdateOperationsInput | number
    meta_data?: JsonNullValueInput | InputJsonValue
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type stepCreateManyWorkflowInput = {
    id?: number
    name?: string | null
    index: number
    typeofstap_id: number
    user_id: number
    meta_data: JsonNullValueInput | InputJsonValue
    status: $Enums.status
    create_at: Date | string
    update_at?: Date | string
  }

  export type stepes_runCreateManyWorkflowInput = {
    id?: number
    meta_data: JsonNullValueInput | InputJsonValue
    status: $Enums.working_status
    step_id: number
    create_at: Date | string
    update_at?: Date | string
  }

  export type stepUpdateWithoutWorkflowInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    index?: IntFieldUpdateOperationsInput | number
    meta_data?: JsonNullValueInput | InputJsonValue
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    typeofstep?: typeofstepUpdateOneRequiredWithoutStepesNestedInput
    user?: userUpdateOneRequiredWithoutStepesNestedInput
    stepes_runs?: stepes_runUpdateManyWithoutStepNestedInput
  }

  export type stepUncheckedUpdateWithoutWorkflowInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    index?: IntFieldUpdateOperationsInput | number
    typeofstap_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    meta_data?: JsonNullValueInput | InputJsonValue
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    stepes_runs?: stepes_runUncheckedUpdateManyWithoutStepNestedInput
  }

  export type stepUncheckedUpdateManyWithoutWorkflowInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    index?: IntFieldUpdateOperationsInput | number
    typeofstap_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    meta_data?: JsonNullValueInput | InputJsonValue
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type stepes_runUpdateWithoutWorkflowInput = {
    meta_data?: JsonNullValueInput | InputJsonValue
    status?: Enumworking_statusFieldUpdateOperationsInput | $Enums.working_status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    step?: stepUpdateOneRequiredWithoutStepes_runsNestedInput
    out_box_step_run?: out_box_step_runUpdateManyWithoutStepes_runNestedInput
    working_step_validation?: working_step_validatorUpdateManyWithoutStepes_runNestedInput
  }

  export type stepes_runUncheckedUpdateWithoutWorkflowInput = {
    id?: IntFieldUpdateOperationsInput | number
    meta_data?: JsonNullValueInput | InputJsonValue
    status?: Enumworking_statusFieldUpdateOperationsInput | $Enums.working_status
    step_id?: IntFieldUpdateOperationsInput | number
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    out_box_step_run?: out_box_step_runUncheckedUpdateManyWithoutStepes_runNestedInput
    working_step_validation?: working_step_validatorUncheckedUpdateManyWithoutStepes_runNestedInput
  }

  export type stepes_runUncheckedUpdateManyWithoutWorkflowInput = {
    id?: IntFieldUpdateOperationsInput | number
    meta_data?: JsonNullValueInput | InputJsonValue
    status?: Enumworking_statusFieldUpdateOperationsInput | $Enums.working_status
    step_id?: IntFieldUpdateOperationsInput | number
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type stepes_runCreateManyStepInput = {
    id?: number
    meta_data: JsonNullValueInput | InputJsonValue
    status: $Enums.working_status
    workflow_id: number
    create_at: Date | string
    update_at?: Date | string
  }

  export type stepes_runUpdateWithoutStepInput = {
    meta_data?: JsonNullValueInput | InputJsonValue
    status?: Enumworking_statusFieldUpdateOperationsInput | $Enums.working_status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    workflow?: workflowUpdateOneRequiredWithoutStepes_runsNestedInput
    out_box_step_run?: out_box_step_runUpdateManyWithoutStepes_runNestedInput
    working_step_validation?: working_step_validatorUpdateManyWithoutStepes_runNestedInput
  }

  export type stepes_runUncheckedUpdateWithoutStepInput = {
    id?: IntFieldUpdateOperationsInput | number
    meta_data?: JsonNullValueInput | InputJsonValue
    status?: Enumworking_statusFieldUpdateOperationsInput | $Enums.working_status
    workflow_id?: IntFieldUpdateOperationsInput | number
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    out_box_step_run?: out_box_step_runUncheckedUpdateManyWithoutStepes_runNestedInput
    working_step_validation?: working_step_validatorUncheckedUpdateManyWithoutStepes_runNestedInput
  }

  export type stepes_runUncheckedUpdateManyWithoutStepInput = {
    id?: IntFieldUpdateOperationsInput | number
    meta_data?: JsonNullValueInput | InputJsonValue
    status?: Enumworking_statusFieldUpdateOperationsInput | $Enums.working_status
    workflow_id?: IntFieldUpdateOperationsInput | number
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type out_box_step_runCreateManyStepes_runInput = {
    id?: number
    create_at: Date | string
    update_at?: Date | string
  }

  export type working_step_validatorCreateManyStepes_runInput = {
    id?: number
    email?: string | null
    message_id?: string | null
    index: number
    status: $Enums.step_validation_status
    create_at: Date | string
    update_at?: Date | string
  }

  export type out_box_step_runUpdateWithoutStepes_runInput = {
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type out_box_step_runUncheckedUpdateWithoutStepes_runInput = {
    id?: IntFieldUpdateOperationsInput | number
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type out_box_step_runUncheckedUpdateManyWithoutStepes_runInput = {
    id?: IntFieldUpdateOperationsInput | number
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type working_step_validatorUpdateWithoutStepes_runInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    index?: IntFieldUpdateOperationsInput | number
    status?: Enumstep_validation_statusFieldUpdateOperationsInput | $Enums.step_validation_status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reseve_email_validator?: reseve_email_validatorUpdateManyWithoutWorking_step_validatorNestedInput
  }

  export type working_step_validatorUncheckedUpdateWithoutStepes_runInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    index?: IntFieldUpdateOperationsInput | number
    status?: Enumstep_validation_statusFieldUpdateOperationsInput | $Enums.step_validation_status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reseve_email_validator?: reseve_email_validatorUncheckedUpdateManyWithoutWorking_step_validatorNestedInput
  }

  export type working_step_validatorUncheckedUpdateManyWithoutStepes_runInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    message_id?: NullableStringFieldUpdateOperationsInput | string | null
    index?: IntFieldUpdateOperationsInput | number
    status?: Enumstep_validation_statusFieldUpdateOperationsInput | $Enums.step_validation_status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reseve_email_validatorCreateManyWorking_step_validatorInput = {
    id?: number
    status: $Enums.working_status
    create_at: Date | string
    update_at?: Date | string
  }

  export type reseve_email_validatorUpdateWithoutWorking_step_validatorInput = {
    status?: Enumworking_statusFieldUpdateOperationsInput | $Enums.working_status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reseve_email_validatorUncheckedUpdateWithoutWorking_step_validatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: Enumworking_statusFieldUpdateOperationsInput | $Enums.working_status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reseve_email_validatorUncheckedUpdateManyWithoutWorking_step_validatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: Enumworking_statusFieldUpdateOperationsInput | $Enums.working_status
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}