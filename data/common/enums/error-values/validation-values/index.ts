enum ValidationCode {
  INVALID_EMAIL = 2000,
  INVALID_PHONE = 2022,
  INVALID_LENGTH = 2001,
  INVALID_LENGTH_MIN = 2002,
  INVALID_LENGTH_MAX = 2003,
  INVALID_NUMBERS = 2004,
  INVALID_SYMBOL = 2005,
  INVALID_LETTER_UPPER = 2006,
  INVALID_CODE = 2007,
  INVALID_REGEX = 2008,
  INVALID_EXCEPTED_VALUE = 2009,
  INVALID_RANGE = 2010,
  INVALID_OBJECT_PATTERN = 2011,
  INVALID_VALIDATION_CODE = 2016,
  INVALID_CYRILLIC = 2017,
  INVALID_LETTER_LOWER = 2018,
  INVALID_LENGTH_CONTAIN = 2019,
  INVALID_STRICT_REGEX = 2020,

  PROPERTY_NOT_MATCH = 2012,
  PROPERTY_IS_NOT_UNIQUE = 2013,

  NEED_SYMBOL = 2014,
  CODE_REQUIRED = 2015,

  PASSWORDS_NOT_COMPARE = 2021,

  INVALID_FILE_ERROR = 2030,
  INVALID_MAX_FILE_SIZE = 2031,
  INVALID_FILE_EXTENSION = 2032,

  EMPTY_DATE_FIELD = 2040,
  EMPTY_TIME_FIELD = 2041,
}

export { ValidationCode }
