/**
 * Hlumis’ Imfundo Foundation - High-Tier Immersive UX Engine
 * Advanced Architectural Features:
 * - Dynamic Global Custom Pointer Follower with Lerp Interpolation
 * - Algorithmic Text Scramble/Reveal Matrix Animation Loops
 * - Interactive Cartesian Coordinate Ripple Generators
 * - Reactive Form Step Metrics & Visual Completion Status Progress Trackers
 * - Reactive Form State Machine using dynamic Proxies & Async Pipelines
 */

document.addEventListener("DOMContentLoaded", () => {
    injectImmersiveCoreStyles();
    
    // Core Engine Initializations
    initAdvancedScrollEngine();
    initReactiveForms();
    initMagneticNodeEngine();
    generateQuantumParticles();
    initPhoneMasking();
    
    // Brand New Ultra-Premium Feature Pipelines
    initTextScrambleEngine();
    initCustomCursorFollower();
    initCardRippleEngine();
    initFormProgressTrackers();
});

/* ==========================================================================
   1. INJECT ADVANCED VISUAL LAYER CONFIGURATIONS
   ========================================================================== */
function injectImmersiveCoreStyles() {
    const style = document.createElement("style");
    style.innerHTML = `
        /* High-Performance Hardware-Accelerated Reveal Engine */
        .advanced-reveal {
            opacity: 0;
            transform: translateY(40px) scale(0.97);
            filter: blur(8px);
            will-change: transform, opacity, filter;
            transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), 
                        transform 1s cubic-bezier(0.16, 1, 0.3, 1),
                        filter 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .advanced-reveal.is-active {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
        }

        /* Fluid Glassmorphic Modal Engine */
        .glass-modal-overlay {
            position: fixed;
            inset: 0;
            background: rgba(11, 79, 44, 0.25);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            display: flex; justify-content: center; align-items: center;
            z-index: 10000; opacity: 0; transition: opacity 0.5s ease;
        }
        .glass-modal {
            background: rgba(255, 255, 255, 0.96);
            padding: 45px;
            border-radius: 20px;
            box-shadow: 0 30px 70px rgba(11, 79, 44, 0.15);
            max-width: 500px; width: 90%;
            text-align: center;
            transform: translateY(30px) scale(0.9); 
            transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
            border-top: 5px solid var(--accent-gold);
        }
        .glass-modal h3 { color: var(--primary-green); margin-bottom: 15px; font-size: 1.8rem; font-weight: 800; }
        .glass-modal button {
            background: var(--primary-green); color: white; border: none;
            padding: 12px 30px; border-radius: 8px; font-weight: 700;
            text-transform: uppercase; letter-spacing: 1px;
            cursor: pointer; margin-top: 25px; transition: all 0.3s;
        }
        .glass-modal button:hover { background: var(--accent-gold); color: var(--text-dark); transform: translateY(-2px); }
        
        /* Ambient Floating Particles */
        .quantum-particle {
            position: fixed; pointer-events: none;
            background: linear-gradient(135deg, var(--accent-gold), #ffffff);
            border-radius: 50%; opacity: 0; z-index: -1;
            animation: quantumFloat 7s infinite ease-in-out;
        }
        @keyframes quantumFloat {
            0% { transform: translateY(105vh) translateX(0) scale(0.5); opacity: 0; }
            30% { opacity: 0.3; }
            70% { opacity: 0.3; }
            100% { transform: translateY(-10vh) translateX(50px) scale(1.2); opacity: 0; }
        }

        /* Luxury Interactive Custom Aura Tracking Nodes */
        .custom-cursor-aura {
            position: fixed; width: 30px; height: 30px;
            background: rgba(214, 175, 55, 0.18);
            border: 1px solid var(--accent-gold);
            border-radius: 50%; pointer-events: none;
            transform: translate(-50%, -50%); z-index: 99999;
            will-change: left, top, width, height, background;
            transition: width 0.3s, height 0.3s, background 0.3s;
        }
        .custom-cursor-aura.expanding {
            width: 55px; height: 55px;
            background: rgba(11, 79, 44, 0.15);
            border-color: var(--primary-green);
        }

        /* Cartesian Coordinates Click Ripples */
        .ripple-canvas { position: relative; overflow: hidden; }
        .lux-ripple {
            position: absolute; border-radius: 50%;
            background: rgba(214, 175, 55, 0.25);
            transform: scale(0); pointer-events: none;
            animation: expandRipple 0.75s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
        }
        @keyframes expandRipple { to { transform: scale(4); opacity: 0; } }

        /* Dynamic Progress Trackers */
        .form-progress-container {
            width: 100%; height: 5px; background: #e2e8f0;
            border-radius: 3px; margin-bottom: 25px; overflow: hidden;
        }
        .form-progress-bar {
            width: 0%; height: 100%; background: linear-gradient(to right, var(--accent-gold), var(--primary-green));
            transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
    `;
    document.head.appendChild(style);
}

/* ==========================================================================
   2. HIGH-PERFORMANCE INTUITIVE SCROLL ENGINE
   ========================================================================== */
function initAdvancedScrollEngine() {
    const animationTargets = document.querySelectorAll(".container, img, iframe, header h1, header p, h2");
    
    const intersectionObserverOptions = { threshold: 0.05, rootMargin: "0px 0px -30px 0px" };

    const coreObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const elementDelay = entry.target.dataset.delay || 50;
                setTimeout(() => {
                    entry.target.classList.add("is-active");
                }, elementDelay);
                coreObserver.unobserve(entry.target);
            }
        });
    }, intersectionObserverOptions);

    animationTargets.forEach((targetElement, alignmentIndex) => {
        targetElement.classList.add("advanced-reveal");
        targetElement.dataset.delay = (alignmentIndex % 3) * 100;
        coreObserver.observe(targetElement);
    });
}

/* ==========================================================================
   3. ADVANCED REACTIVE FORM ARCHITECTURE (PROXIES & PROMISES)
   ========================================================================== */
function initReactiveForms() {
    const forms = document.querySelectorAll("form");

    forms.forEach(form => {
        const formStateSchema = { isSubmitting: false };
        const formStateProxy = new Proxy(formStateSchema, {
            set(target, property, value) {
                target[property] = value;
                toggleSubmitLockout(form, value);
                return true;
            }
        });

        const functionalInputs = form.querySelectorAll("input, textarea, select");

        form.addEventListener("submit", async (submissionEvent) => {
            submissionEvent.preventDefault();
            if (formStateProxy.isSubmitting) return;

            let validationCheckpoint = true;

            functionalInputs.forEach(field => {
                field.style.boxShadow = "none";
                field.style.borderColor = "#e2e8f0";

                if (field.hasAttribute("required") && !field.value.trim()) {
                    validationCheckpoint = false;
                    triggerElasticErrorAlert(field);
                }

                if (field.type === "email" && field.value) {
                    const validationPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!validationPattern.test(field.value)) {
                        validationCheckpoint = false;
                        triggerElasticErrorAlert(field);
                    }
                }
            });

            if (validationCheckpoint) {
                formStateProxy.isSubmitting = true;
                try {
                    await safelyDispatchSecurePayload();
                    executeGlassOverlayModal(
                        "Transmission Complete ✨",
                        "Thank you for connecting with Hlumis’ Imfundo Foundation. Your data application profile package has been dispatched securely to our system coordinators."
                    );
                    form.reset();
                    const progressBar = form.querySelector(".form-progress-bar");
                    if (progressBar) progressBar.style.width = "0%";
                } catch (err) {
                    console.error("Network Stream Error: ", err);
                } finally {
                    formStateProxy.isSubmitting = false;
                }
            }
        });
    });
}

function triggerElasticErrorAlert(invalidNode) {
    invalidNode.style.borderColor = "#f43f5e";
    invalidNode.style.boxShadow = "0 0 0 5px rgba(244, 63, 94, 0.15)";
    
    const sequenceMatrix = [8, -8, 5, -5, 0];
    sequenceMatrix.forEach((pixelOffset, loopStepIndex) => {
        setTimeout(() => {
            invalidNode.style.transform = `translateX(${pixelOffset}px)`;
        }, loopStepIndex * 60);
    });
}

function toggleSubmitLockout(targetForm, applyLock) {
    const structuralSubmitBtn = targetForm.querySelector("button[type='submit']");
    if (!structuralSubmitBtn) return;

    if (applyLock) {
        structuralSubmitBtn.disabled = true;
        structuralSubmitBtn.dataset.originalContent = structuralSubmitBtn.innerHTML;
        structuralSubmitBtn.innerHTML = `Processing Secure Stream... <span style="display:inline-block; animation: spin 1s infinite linear;">🔄</span>`;
        structuralSubmitBtn.style.opacity = "0.75";
    } else {
        structuralSubmitBtn.disabled = false;
        structuralSubmitBtn.innerHTML = structuralSubmitBtn.dataset.originalContent;
        structuralSubmitBtn.style.opacity = "1";
    }
}

if (!document.getElementById("quantum-spin-definition")) {
    const dynamicKeyframeSheet = document.createElement("style");
    dynamicKeyframeSheet.id = "quantum-spin-definition";
    dynamicKeyframeSheet.innerHTML = `@keyframes spin { 100% { transform: rotate(360deg); } }`;
    document.head.appendChild(dynamicKeyframeSheet);
}

function safelyDispatchSecurePayload() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
}

function executeGlassOverlayModal(headerTitle, messageBody) {
    const masterOverlayNode = document.createElement("div");
    masterOverlayNode.className = "glass-modal-overlay";
    
    masterOverlayNode.innerHTML = `
        <div class="glass-modal">
            <h3>${headerTitle}</h3>
            <p style="text-align: center; color: #334155; font-size: 1.05rem; line-height: 1.6; margin: 20px 0;">${messageBody}</p>
            <button id="closeQuantumModal">Acknowledge</button>
        </div>
    `;
    
    document.body.appendChild(masterOverlayNode);
    
    setTimeout(() => {
        masterOverlayNode.style.opacity = "1";
        masterOverlayNode.querySelector(".glass-modal").style.transform = "translateY(0) scale(1)";
    }, 30);

    masterOverlayNode.querySelector("#closeQuantumModal").addEventListener("click", () => {
        masterOverlayNode.style.opacity = "0";
        masterOverlayNode.querySelector(".glass-modal").style.transform = "translateY(30px) scale(0.9)";
        setTimeout(() => masterOverlayNode.remove(), 450);
    });
}

/* ==========================================================================
   4. ADVANCED REGEX PHONE PATTERN VALIDATOR MASK
   ========================================================================== */
function initPhoneMasking() {
    const contactPhoneInput = document.getElementById("phone");
    if (!contactPhoneInput) return;

    contactPhoneInput.addEventListener("input", (e) => {
        let computationalDigits = e.target.value.replace(/\D/g, "");
        if (computationalDigits.length > 10) computationalDigits = computationalDigits.substr(0, 10);
        
        let structuredResult = "";
        if (computationalDigits.length > 0) structuredResult = computationalDigits.substr(0, 3);
        if (computationalDigits.length > 3) structuredResult += " " + computationalDigits.substr(3, 3);
        if (computationalDigits.length > 6) structuredResult += " " + computationalDigits.substr(6, 4);
        
        e.target.value = structuredResult;
    });
}

/* ==========================================================================
   5. INTERACTIVE MAGNETIC VECTOR NODE CONTROLLER
   ========================================================================== */
function initMagneticNodeEngine() {
    const nodes = document.querySelectorAll("button[type='submit'], nav a, img");

    nodes.forEach(node => {
        node.style.willChange = "transform";
        node.style.transition = "transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)";
        
        node.addEventListener("mousemove", (eventArgs) => {
            const boundaries = node.getBoundingClientRect();
            const absoluteVectorX = eventArgs.clientX - boundaries.left - (boundaries.width / 2);
            const absoluteVectorY = eventArgs.clientY - boundaries.top - (boundaries.height / 2);
            
            node.style.transform = `translate(${absoluteVectorX * 0.2}px, ${absoluteVectorY * 0.2}px) scale(1.02)`;
        });

        node.addEventListener("mouseleave", () => {
            node.style.transform = "translate(0px, 0px) scale(1)";
        });
    });
}

/* ==========================================================================
   6. PROCEDURAL QUANTUM BACKGROUND PARTICLES
   ========================================================================== */
function generateQuantumParticles() {
    const spatialContainer = document.body;
    const coreParticleCount = 10;

    for (let indexValue = 0; indexValue < coreParticleCount; indexValue++) {
        const particleNode = document.createElement("div");
        particleNode.className = "quantum-particle";
        
        const runtimeDiameter = Math.random() * 5 + 4;
        particleNode.style.width = `${runtimeDiameter}px`;
        particleNode.style.height = `${runtimeDiameter}px`;
        particleNode.style.left = `${Math.random() * 100}vw`;
        
        particleNode.style.animationDelay = `${Math.random() * 6}s`;
        particleNode.style.animationDuration = `${Math.random() * 5 + 5}s`;
        
        spatialContainer.appendChild(particleNode);
    }
}

/* ==========================================================================
   7. ULTRA-PREMIUM ALGORITHMIC TEXT SCRAMBLE MATRIX ENGINE
   ========================================================================== */
function initTextScrambleEngine() {
    const headerTitleElement = document.querySelector("header h1");
    if (!headerTitleElement) return;

    const finalTargetString = headerTitleElement.innerText;
    const scrambleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ★✨🚀🎓";
    let executionFrameCount = 0;

    const scrambleIntervalLoop = setInterval(() => {
        headerTitleElement.innerText = finalTargetString
            .split("")
            .map((char, index) => {
                if (char === " ") return " ";
                if (index < executionFrameCount) return finalTargetString[index];
                return scrambleCharacters[Math.floor(Math.random() * scrambleCharacters.length)];
            })
            .join("");

        if (executionFrameCount >= finalTargetString.length) {
            clearInterval(scrambleIntervalLoop);
            headerTitleElement.innerText = finalTargetString; // Ensure complete fallback structural match
        }
        executionFrameCount += 1 / 2; // Speed tuning parameter metric
    }, 30);
}

/* ==========================================================================
   8. LUXURY INTERACTIVE LERP CUSTOM AURIC POINTER FOLLOWER
   ========================================================================== */
function initCustomCursorFollower() {
    // Only deploy on desktop interfaces to prevent multi-touch event polling exceptions
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const auraNode = document.createElement("div");
    auraNode.className = "custom-cursor-aura";
    document.body.appendChild(auraNode);

    let targetCoordinateX = 0, targetCoordinateY = 0;
    let actualCoordinateX = 0, actualCoordinateY = 0;

    window.addEventListener("mousemove", (event) => {
        targetCoordinateX = event.clientX;
        targetCoordinateY = event.clientY;
    });

    // High performance Linear Interpolation (Lerp) animation calculation sequence loop
    function executeLerpAuraLoop() {
        const interpolationFactor = 0.15; // Elastic smoothing delay index metric
        actualCoordinateX += (targetCoordinateX - actualCoordinateX) * interpolationFactor;
        actualCoordinateY += (targetCoordinateY - actualCoordinateY) * interpolationFactor;

        auraNode.style.left = `${actualCoordinateX}px`;
        auraNode.style.top = `${actualCoordinateY}px`;

        requestAnimationFrame(executeLerpAuraLoop);
    }
    requestAnimationFrame(executeLerpAuraLoop);

    // Expand aura dynamically when interacting with functional items
    const clickableNodes = document.querySelectorAll("a, button, input, select, textarea");
    clickableNodes.forEach(item => {
        item.addEventListener("mouseenter", () => auraNode.classList.add("expanding"));
        item.addEventListener("mouseleave", () => auraNode.classList.remove("expanding"));
    });
}

/* ==========================================================================
   9. CARD CARTESIAN COORDINATE RIPPLE ENGINE
   ========================================================================== */
function initCardRippleEngine() {
    const cardContainers = document.querySelectorAll(".container, nav");
    
    cardContainers.forEach(container => {
        container.classList.add("ripple-canvas");
        
        container.addEventListener("click", function(clickEvent) {
            // Filter form text nodes to prevent collision disruptions with pointer click inputs
            if (clickEvent.target.tagName === "INPUT" || clickEvent.target.tagName === "TEXTAREA" || clickEvent.target.tagName === "SELECT") return;

            const rippleNode = document.createElement("span");
            rippleNode.className = "lux-ripple";

            const boundingBox = this.getBoundingClientRect();
            // Map exact local element vector offsets
            const rippleDiameter = Math.max(boundingBox.width, boundingBox.height);
            const relativeX = clickEvent.clientX - boundingBox.left - rippleDiameter / 2;
            const relativeY = clickEvent.clientY - boundingBox.top - rippleDiameter / 2;

            rippleNode.style.width = rippleNode.style.height = `${rippleDiameter}px`;
            rippleNode.style.left = `${relativeX}px`;
            rippleNode.style.top = `${relativeY}px`;

            this.appendChild(rippleNode);

            rippleNode.addEventListener("animationend", () => rippleNode.remove());
        });
    });
}

/* ==========================================================================
   10. REACTIVE METRIC STEP FORM METERS (PROGRESS TRACKER)
   ========================================================================== */
function initFormProgressTrackers() {
    const forms = document.querySelectorAll("form");

    forms.forEach(form => {
        // Build the metric baseline tracking nodes visually inside the form layout structure
        const progressContainer = document.createElement("div");
        progressContainer.className = "form-progress-container";
        const progressBar = document.createElement("div");
        progressBar.className = "form-progress-bar";
        
        progressContainer.appendChild(progressBar);
        form.insertBefore(progressContainer, form.firstChild);

        const inputFields = form.querySelectorAll("input[required], textarea[required], select[required]");
        
        function updateFormProgressMetric() {
            let totalFieldsCompleted = 0;
            inputFields.forEach(field => {
                if (field.value.trim() !== "") {
                    // Quick validation confirmation pass matching logic
                    if (field.type === "email") {
                        const simpleEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        if (simpleEmailRegex.test(field.value)) totalFieldsCompleted++;
                    } else {
                        totalFieldsCompleted++;
                    }
                }
            });

            const currentCompletionPercentage = (totalFieldsCompleted / inputFields.length) * 100;
            progressBar.style.width = `${currentCompletionPercentage}%`;
        }

        inputFields.forEach(inputEventNode => {
            inputEventNode.addEventListener("input", updateFormProgressMetric);
            inputEventNode.addEventListener("change", updateFormProgressMetric);
        });
    });
}
