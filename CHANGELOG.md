# [2.2.0](https://github.com/skypilot-dev/common-types/compare/v2.2.0-next.0...v2.2.0) (2021-03-16)


### Features

* Add template literal types for primitives & HttpUrl ([2259c5e](https://github.com/skypilot-dev/common-types/commit/2259c5ec0d4238cdc9ad081229e0d637a743db72))



## [2.1.8](https://github.com/skypilot-dev/common-types/compare/v2.1.6-next.1...v2.1.8) (2021-03-13)



## [2.1.5](https://github.com/skypilot-dev/common-types/compare/v2.1.5-next.2...v2.1.5) (2021-02-28)


### Bug Fixes

* Typing of read-only array uses syntax meant for properties ([94e9e23](https://github.com/skypilot-dev/common-types/commit/94e9e23019f7e08669cbbf8941ffc0625cf7250e))



## [2.1.4](https://github.com/skypilot-dev/common-types/compare/v2.1.4-next.0...v2.1.4) (2020-12-07)



## [2.1.3](https://github.com/skypilot-dev/common-types/compare/v2.1.2-next.0...v2.1.3) (2020-10-03)



## [2.1.1](https://github.com/skypilot-dev/common-types/compare/v2.1.1-next.0...v2.1.1) (2020-08-16)



## [2.1.1-next.0](https://github.com/skypilot-dev/common-types/compare/v2.1.0...v2.1.1-next.0) (2020-08-15)



# [2.1.0](https://github.com/skypilot-dev/common-types/compare/v2.1.0-next.0...v2.1.0) (2020-08-11)



# [2.1.0-next.0](https://github.com/skypilot-dev/common-types/compare/v2.1.0-alpha.9...v2.1.0-next.0) (2020-08-05)


### Features

* Add `AnyRecord` convenience type ([35555aa](https://github.com/skypilot-dev/common-types/commit/35555aa6d480c3c98217a6f8889568e62c01aa5e))
* Add `EmptyObject` convenience type ([4d3533a](https://github.com/skypilot-dev/common-types/commit/4d3533acebba71fa3de063f884eb749fdb4779a6))



# [2.1.0-alpha.7](https://github.com/skypilot-dev/common-types/compare/v2.1.0-alpha.5...v2.1.0-alpha.7) (2020-08-03)


### Features

* Add `PromisedReturnType` utility type ([1d2ae90](https://github.com/skypilot-dev/common-types/commit/1d2ae9047537c7cb0fbc963c9b25102ba825a66a))
* Improve typing of `ArrayItems`; add deprecation decorators ([2022b7b](https://github.com/skypilot-dev/common-types/commit/2022b7b58317da2dbb681b7ac0a47408adbbf534))



# [2.1.0-alpha.5](https://github.com/skypilot-dev/common-types/compare/v2.1.0-alpha.4...v2.1.0-alpha.5) (2020-08-02)


### Features

* Optionally match specified keys in `ObjectEntries` ([49e8c2d](https://github.com/skypilot-dev/common-types/commit/49e8c2d763d224ff0dbdd565fb2b8c68f977d1d4))



# [2.1.0-alpha.4](https://github.com/skypilot-dev/common-types/compare/v2.1.0-alpha.3...v2.1.0-alpha.4) (2020-08-02)


### Features

* Add `ArrayItems` utility type ([4d499b0](https://github.com/skypilot-dev/common-types/commit/4d499b064002f8d6a231c97ee38a1202b1f809c2))
* Add `ObjectKeys`, `ObjectValues` & `ObjectEntries` utility types ([fd185be](https://github.com/skypilot-dev/common-types/commit/fd185be7db716cc8109dff78d434ee65dd80e11a))



# [2.1.0-alpha.3](https://github.com/skypilot-dev/common-types/compare/v2.0.1-next.1...v2.1.0-alpha.3) (2020-07-31)


### Features

* Add `UnpackedArray` utility type ([09a4769](https://github.com/skypilot-dev/common-types/commit/09a476916b0a0528e9462eff50866f58957b43de))
* Add utility types that match serializable values ([4f1b936](https://github.com/skypilot-dev/common-types/commit/4f1b936570b7d5b10e42c2ce6c384c55533d371f))



## [2.0.1-next.1](https://github.com/skypilot-dev/common-types/compare/v2.0.1-next.0...v2.0.1-next.1) (2020-07-31)



# [2.0.0](https://github.com/skypilot-dev/common-types/compare/v2.0.0-next.0...v2.0.0) (2020-06-16)



# [2.0.0-next.0](https://github.com/skypilot-dev/common-types/compare/v2.0.0-alpha.1...v2.0.0-next.0) (2020-06-16)



# [2.0.0-alpha.1](https://github.com/skypilot-dev/common-types/compare/v1.7.3...v2.0.0-alpha.1) (2020-06-09)


* CHG!: More flexible JsonValue; new JsonMap to replace JsonObject ([3aca67f](https://github.com/skypilot-dev/common-types/commit/3aca67f653cfb003a6709ab3cada89b6eda51ae4))


### BREAKING CHANGES

* - `JsonValue` is more flexible, but breaks the existing API by relying on a new `JsonMap` type in place of `JsonObject`, which has been removed
- `Literal` has been renamed to `Primitive`
- The `Json*` types reference a new `JsonPrimitive` instead of `Literal`
- Added `DefiniteJson*` types that are identical to the `Json*` types except that they disallow `undefined` values



## [1.7.3](https://github.com/skypilot-dev/common-types/compare/v1.7.3-next.0...v1.7.3) (2020-05-30)



## [1.7.3-next.0](https://github.com/skypilot-dev/common-types/compare/v1.7.2-next.3...v1.7.3-next.0) (2020-05-29)



## [1.7.2-next.3](https://github.com/skypilot-dev/common-types/compare/v1.7.2...v1.7.2-next.3) (2020-05-08)



## [1.7.2-next.1](https://github.com/skypilot-dev/common-types/compare/v1.7.2-next.0...v1.7.2-next.1) (2020-05-08)



## [1.7.2-next.0](https://github.com/skypilot-dev/common-types/compare/v1.7.1...v1.7.2-next.0) (2020-05-07)



## [1.7.1](https://github.com/skypilot-dev/common-types/compare/v1.7.1-next.0...v1.7.1) (2020-05-07)



## [1.7.1-next.0](https://github.com/skypilot-dev/common-types/compare/v1.7.0...v1.7.1-next.0) (2020-05-07)



# [1.7.0](https://github.com/skypilot-dev/common-types/compare/v1.7.0-next.1...v1.7.0) (2020-05-03)



# [1.7.0-next.1](https://github.com/skypilot-dev/common-types/compare/v1.6.0...v1.7.0-next.1) (2020-05-03)


### Bug Fixes

* Syntax of `Require` is faulty ([a40f479](https://github.com/skypilot-dev/common-types/commit/a40f47961b190d013edcd2dee33c88e8099a4aa5))



# [1.6.0](https://github.com/skypilot-dev/common-types/compare/v1.6.0-next.0...v1.6.0) (2020-04-30)



# [1.6.0-next.0](https://github.com/skypilot-dev/common-types/compare/v1.5.0...v1.6.0-next.0) (2020-04-30)


### Features

* Add `MaybeReadOnlyArray` utility type ([1f4c636](https://github.com/skypilot-dev/common-types/commit/1f4c636066f21dd0c86bd0928bdf06744c2f836b))
* Add `Required` utility type ([e8e5438](https://github.com/skypilot-dev/common-types/commit/e8e5438ded0f3377f69cb1a13962352e994bd041))



# [1.5.0](https://github.com/skypilot-dev/common-types/compare/v1.4.6...v1.5.0) (2020-03-29)


### Features

* Add `AtLeastOne` and `ExactlyOne` utility types ([dd368b5](https://github.com/skypilot-dev/common-types/commit/dd368b51977cd3209ffdbe754ab9ccdd66390d6d))



## [1.4.6](https://github.com/skypilot-dev/common-types/compare/v1.4.6-next.0...v1.4.6) (2020-03-27)



## [1.4.6-next.0](https://github.com/skypilot-dev/common-types/compare/v1.4.5...v1.4.6-next.0) (2020-03-27)



## [1.4.5](https://github.com/skypilot-dev/common-types/compare/v1.4.5-next.0...v1.4.5) (2020-03-25)



## [1.4.5-next.0](https://github.com/skypilot-dev/common-types/compare/v1.4.4...v1.4.5-next.0) (2020-03-25)



## [1.4.4](https://github.com/skypilot-dev/common-types/compare/v1.4.3...v1.4.4) (2020-03-18)



## [1.4.3](https://github.com/skypilot-dev/common-types/compare/v1.4.3-next.0...v1.4.3) (2020-03-14)



## [1.4.3-next.0](https://github.com/skypilot-dev/common-types/compare/v1.4.2...v1.4.3-next.0) (2020-03-14)



## [1.4.2](https://github.com/skypilot-dev/common-types/compare/v1.4.2-next.1...v1.4.2) (2020-03-14)



## [1.4.2-next.1](https://github.com/skypilot-dev/common-types/compare/v1.4.2-next.0...v1.4.2-next.1) (2020-03-14)



## [1.4.1](https://github.com/skypilot-dev/common-types/compare/v1.4.1-next.0...v1.4.1) (2020-03-12)



## [1.4.1-next.0](https://github.com/skypilot-dev/common-types/compare/v1.4.0...v1.4.1-next.0) (2020-03-12)



# [1.4.0](https://github.com/skypilot-dev/common-types/compare/v1.4.0-next.0...v1.4.0) (2020-03-07)



# [1.4.0-next.0](https://github.com/skypilot-dev/common-types/compare/v1.3.2...v1.4.0-next.0) (2020-03-07)


### Features

* Add `Email` pseudo-type ([cc09b54](https://github.com/skypilot-dev/common-types/commit/cc09b54ae65d65854cce67e91beeea844de27c5a))



## [1.3.2](https://github.com/skypilot-dev/common-types/compare/v1.3.2-next.0...v1.3.2) (2020-03-01)



## [1.3.2-next.0](https://github.com/skypilot-dev/common-types/compare/v1.3.1...v1.3.2-next.0) (2020-03-01)



## [1.3.1](https://github.com/skypilot-dev/common-types/compare/v1.3.0...v1.3.1) (2020-02-28)



# [1.3.0](https://github.com/skypilot-dev/common-types/compare/v1.2.2...v1.3.0) (2020-02-28)


### Features

* Add `Enum` type ([162d9e2](https://github.com/skypilot-dev/common-types/commit/162d9e237907971bb8d1a9ab122b1e320a38199b))



## [1.2.2](https://github.com/skypilot-dev/common-types/compare/v1.2.1...v1.2.2) (2020-02-14)



## [1.2.1](https://github.com/skypilot-dev/common-types/compare/v1.2.0...v1.2.1) (2020-02-13)


### Bug Fixes

* Rename `MaybeDefined` to `MaybeUndefined` for consistency ([11533ec](https://github.com/skypilot-dev/common-types/commit/11533ec1e04f8bca084bd1d43dbf416fd921fab5))



# [1.2.0](https://github.com/skypilot-dev/common-types/compare/v1.1.0...v1.2.0) (2020-02-13)


### Features

* Add 'MaybeDefined' and 'MaybeNull' utility types ([7bbd119](https://github.com/skypilot-dev/common-types/commit/7bbd1196dbbbc72204a01355158e205d31d95e0d))



# [1.1.0](https://github.com/skypilot-dev/common-types/compare/v1.0.5...v1.1.0) (2020-02-13)


### Features

* Add 'Maybe' utility type ([fc3778f](https://github.com/skypilot-dev/common-types/commit/fc3778fbfa30b407f02ff5d84bfcd32e81a28137))



## [1.0.5](https://github.com/skypilot-dev/common-types/compare/v1.0.5-beta.2...v1.0.5) (2020-02-10)



## [1.0.5-beta.2](https://github.com/skypilot-dev/common-types/compare/v1.0.4...v1.0.5-beta.2) (2020-02-10)



## [1.0.4](https://github.com/skypilot-dev/common-types/compare/v1.0.3...v1.0.4) (2020-02-10)



## [1.0.3](https://github.com/skypilot-dev/common-types/compare/v1.0.2...v1.0.3) (2020-02-07)



## [1.0.2](https://github.com/skypilot-dev/common-types/compare/v1.0.1...v1.0.2) (2020-02-06)



## [1.0.1](https://github.com/skypilot-dev/common-types/compare/v0.5.1...v1.0.1) (2020-02-06)



## [0.5.1](https://github.com/skypilot-dev/common-types/compare/0.5.0...v0.5.1) (2020-02-06)



# [0.5.0](https://github.com/skypilot-dev/common-types/compare/v0.4.0...0.5.0) (2020-01-29)


### Features

* Add `SortComparison` for array sorting comparisons ([f511684](https://github.com/skypilot-dev/common-types/commit/f5116845ca69f8c4445d79f666b5a40199250b99))
* Automatically publish master & edge releases ([e5693ae](https://github.com/skypilot-dev/common-types/commit/e5693aedcd2bf0a28bc9818deeb8970580f3c42f))



# [0.4.0](https://github.com/skypilot-dev/common-types/compare/v0.3.0...v0.4.0) (2019-12-07)



# [0.3.0](https://github.com/skypilot-dev/common-types/compare/v0.2.1...v0.3.0) (2019-12-02)



## [0.2.1](https://github.com/skypilot-dev/common-types/compare/v0.1.2...v0.2.1) (2019-12-01)



## [0.1.2](https://github.com/skypilot-dev/common-types/compare/v0.1.1...v0.1.2) (2019-11-22)



## [0.1.1](https://github.com/skypilot-dev/common-types/compare/v0.1.0...v0.1.1) (2019-11-22)


### Bug Fixes

* Package entrypoints are incorrectly set in package file ([70bff6a](https://github.com/skypilot-dev/common-types/commit/70bff6a30b6ad3b839447121b0b86996dd2cbeb6))



# [0.1.0](https://github.com/skypilot-dev/common-types/compare/dc21f25f8f16d49a488cc93be3fcd493f450e049...v0.1.0) (2019-11-21)


### Features

* Define common useful types ([dc21f25](https://github.com/skypilot-dev/common-types/commit/dc21f25f8f16d49a488cc93be3fcd493f450e049))



