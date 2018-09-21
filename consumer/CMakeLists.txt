cmake_minimum_required(VERSION 3.10.2)
project(C++)

find_package(CURL REQUIRED) 
include_directories(${CURL_INCLUDE_DIR})

include_directories(include)


if(WIN32)
    set (PLATFORM_SRC src/main.cpp)
elseif(UNIX)
    set (PLATFORM_SRC src/main.cpp)
endif()

set(TUTORIAL_SRC
    ${PLATFORM_SRC}
    src/main.cpp
)

add_executable(main ${TUTORIAL_SRC})