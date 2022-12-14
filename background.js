// Copyright 2017 The Chromium Authors. All rights reserved.
// Copyright 2022 RStudio, PBC. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener((text) => {
    // Encode user input for special characters , / ? : @ & = + $ #
    var newURL = 'https://quarto.org/?q=' + encodeURIComponent(text) + '&show-results=1';
    chrome.tabs.create({ url: newURL });
  });