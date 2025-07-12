// Application Data
const resumeData = {
    personalInfo: {
        name: "Nikolay Bonapartov",
        location: "Porto, Portugal",
        phone: "+351913982737",
        email: "bonapartov@gmail.com",
        linkedin: "linkedin.com/in/nikolaybonapartov"
    },
    summary: "Media Buyer with 6+ years of experience in data-driven online advertising, media buying, and project management. Expertise in performance marketing across multiple platforms including Meta, X (Twitter), TikTok, and Google Ads. Proven track record of scaling campaigns, optimizing ROI, and managing substantial advertising budgets.",
    experience: [
        {
            id: 1,
            company: "Aleph Group",
            position: "Media Buyer for X",
            period: "10/2022 - 01/2025",
            enabled: true,
            bullets: [
                { id: 1, text: "Managed X (Twitter) advertising campaigns with monthly budgets exceeding $500K across multiple verticals", enabled: true },
                { id: 2, text: "Achieved 35% improvement in CPM and 28% increase in conversion rates through advanced audience targeting", enabled: true },
                { id: 3, text: "Implemented automated bidding strategies that reduced manual optimization time by 60%", enabled: true },
                { id: 4, text: "Collaborated with creative teams to develop high-performing ad creatives with 40% higher engagement rates", enabled: true },
                { id: 5, text: "Led training sessions for 8 junior media buyers on X platform best practices and optimization techniques", enabled: true }
            ]
        },
        {
            id: 2,
            company: "Aleph Group",
            position: "Media Buyer for Meta",
            period: "08/2020 - 10/2022",
            enabled: true,
            bullets: [
                { id: 6, text: "Scaled Facebook and Instagram ad campaigns from $100K to $1.2M monthly ad spend while maintaining target ROAS", enabled: true },
                { id: 7, text: "Developed and executed comprehensive testing frameworks for creative assets, audiences, and bidding strategies", enabled: true },
                { id: 8, text: "Achieved 45% reduction in cost per acquisition through advanced pixel implementation and conversion optimization", enabled: true },
                { id: 9, text: "Managed cross-functional relationships with 12+ client accounts across e-commerce, fintech, and gaming verticals", enabled: true },
                { id: 10, text: "Implemented Facebook Conversions API integration resulting in 25% improvement in attribution accuracy", enabled: true }
            ]
        },
        {
            id: 3,
            company: "LANCK Telecom",
            position: "Media Buyer",
            period: "01/2020 - 07/2020",
            enabled: true,
            bullets: [
                { id: 11, text: "Launched and optimized multi-channel paid acquisition campaigns across Google Ads, Facebook, and native platforms", enabled: true },
                { id: 12, text: "Achieved 60% increase in qualified leads while reducing cost per lead by 35% through strategic campaign optimization", enabled: true }
            ]
        },
        {
            id: 4,
            company: "My Tweed",
            position: "Development Manager",
            period: "07/2012 - 06/2020",
            enabled: true,
            bullets: [
                { id: 13, text: "Led business development initiatives that increased company revenue by 150% over 3 years", enabled: true },
                { id: 14, text: "Managed strategic partnerships with 25+ suppliers and vendors, negotiating contracts worth $2M+ annually", enabled: true },
                { id: 15, text: "Implemented data-driven decision making processes that improved operational efficiency by 40%", enabled: true },
                { id: 16, text: "Built and managed cross-functional teams of 15+ members across development, marketing, and operations", enabled: true },
                { id: 17, text: "Developed comprehensive project management frameworks that reduced delivery timelines by 25%", enabled: true }
            ]
        },
        {
            id: 5,
            company: "Shinez",
            position: "Media Buyer",
            period: "07/2019 - 12/2019",
            enabled: true,
            bullets: [
                { id: 18, text: "Executed performance marketing campaigns for mobile apps with focus on user acquisition and retention", enabled: true },
                { id: 19, text: "Optimized campaigns across multiple traffic sources achieving 30% improvement in lifetime value", enabled: true }
            ]
        },
        {
            id: 6,
            company: "Binomo",
            position: "Senior Media Buyer",
            period: "07/2018 - 07/2019",
            enabled: true,
            bullets: [
                { id: 20, text: "Managed high-volume paid acquisition campaigns with daily budgets exceeding $50K across multiple geos", enabled: true },
                { id: 21, text: "Developed sophisticated attribution models and tracking systems to optimize for long-term user value", enabled: true },
                { id: 22, text: "Achieved 55% improvement in user acquisition costs while maintaining conversion quality standards", enabled: true },
                { id: 23, text: "Collaborated with product teams to implement tracking solutions that improved campaign performance by 40%", enabled: true }
            ]
        }
    ],
    skills: [
        "Performance Marketing", "Media Buying", "Facebook Ads", "Google Ads", "X (Twitter) Ads",
        "TikTok Ads", "Programmatic Advertising", "Campaign Optimization", "Data Analysis",
        "ROI Optimization", "Conversion Tracking", "Attribution Modeling", "A/B Testing",
        "Audience Targeting", "Creative Testing", "Budget Management", "Cross-platform Campaigns",
        "Analytics Tools", "Project Management", "Team Leadership"
    ],
    education: [
        {
            degree: "Bachelor's Degree in Business Administration",
            institution: "University of Economics",
            year: "2012"
        }
    ]
};

// Sample job data
let jobsData = [
    {
        id: 1,
        company: "FlowTiger",
        position: "Senior Media Buyer",
        salary: "$80,000 - $95,000",
        location: "Remote",
        priority: "High",
        status: "applying",
        dateAdded: "2025-01-05"
    },
    {
        id: 2,
        company: "AdTech Solutions",
        position: "Performance Marketing Manager",
        salary: "$75,000 - $90,000",
        location: "New York, NY",
        priority: "Medium",
        status: "applied",
        dateAdded: "2025-01-03"
    },
    {
        id: 3,
        company: "Growth Co",
        position: "Digital Marketing Specialist",
        salary: "$65,000 - $75,000",
        location: "Remote",
        priority: "Low",
        status: "interview",
        dateAdded: "2025-01-01"
    },
    {
        id: 4,
        company: "ScaleUp Inc",
        position: "Media Buying Lead",
        salary: "$85,000 - $100,000",
        location: "San Francisco, CA",
        priority: "High",
        status: "saved",
        dateAdded: "2025-01-07"
    }
];

// Application State
let currentData = JSON.parse(JSON.stringify(resumeData));
let analysisChart = null;
let applicationChart = null;
let trendsChart = null;

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    bindEvents();
    loadFromLocalStorage();
});

function initializeApp() {
    populateResumeEditor();
    renderExperience();
    renderSkills();
    renderJobTracker();
    initializeTabs();
    loadSampleJobDescription();
}

function bindEvents() {
    // Tab navigation
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            switchTab(this.getAttribute('data-tab'));
        });
    });

    // Resume editor events
    document.getElementById('export-pdf').addEventListener('click', exportToPDF);
    document.getElementById('analyze-btn').addEventListener('click', analyzeMatch);
    
    // Job tracker events
    document.getElementById('add-job-btn').addEventListener('click', openJobModal);
    document.getElementById('close-modal').addEventListener('click', closeJobModal);
    document.getElementById('cancel-job').addEventListener('click', closeJobModal);
    document.getElementById('save-job').addEventListener('click', saveJob);

    // Auto-save on input changes
    document.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('input', saveToLocalStorage);
    });
}

function populateResumeEditor() {
    // Personal Info
    document.getElementById('name').value = currentData.personalInfo.name;
    document.getElementById('location').value = currentData.personalInfo.location;
    document.getElementById('phone').value = currentData.personalInfo.phone;
    document.getElementById('email').value = currentData.personalInfo.email;
    document.getElementById('linkedin').value = currentData.personalInfo.linkedin;
    
    // Summary
    document.getElementById('summary').value = currentData.summary;
    
    // Education
    if (currentData.education.length > 0) {
        document.getElementById('degree').value = currentData.education[0].degree;
        document.getElementById('institution').value = currentData.education[0].institution;
        document.getElementById('graduation-year').value = currentData.education[0].year;
    }
}

function renderExperience() {
    const experienceList = document.getElementById('experience-list');
    experienceList.innerHTML = '';
    
    currentData.experience.forEach(exp => {
        const expDiv = document.createElement('div');
        expDiv.className = `experience-item ${exp.enabled ? 'enabled' : 'disabled'}`;
        expDiv.innerHTML = `
            <div class="experience-header">
                <input type="checkbox" ${exp.enabled ? 'checked' : ''} 
                       onchange="toggleExperience(${exp.id})">
                <div class="experience-info">
                    <h4>${exp.company} - ${exp.position}</h4>
                    <p>${exp.period}</p>
                </div>
            </div>
            <div class="bullets">
                ${exp.bullets.map(bullet => `
                    <div class="bullet-point">
                        <input type="checkbox" ${bullet.enabled ? 'checked' : ''} 
                               onchange="toggleBullet(${exp.id}, ${bullet.id})">
                        <textarea onchange="updateBulletText(${exp.id}, ${bullet.id}, this.value)"
                                  ${!bullet.enabled ? 'disabled' : ''}>${bullet.text}</textarea>
                    </div>
                `).join('')}
            </div>
        `;
        experienceList.appendChild(expDiv);
    });
}

function renderSkills() {
    const skillsContainer = document.getElementById('skills-container');
    skillsContainer.innerHTML = '';
    
    currentData.skills.forEach(skill => {
        const skillTag = document.createElement('div');
        skillTag.className = 'skill-tag';
        skillTag.textContent = skill;
        skillsContainer.appendChild(skillTag);
    });
}

function renderJobTracker() {
    const statuses = ['saved', 'applying', 'applied', 'interview', 'negotiating', 'accepted'];
    
    statuses.forEach(status => {
        const container = document.getElementById(`${status}-jobs`);
        const jobs = jobsData.filter(job => job.status === status);
        
        container.innerHTML = '';
        
        jobs.forEach(job => {
            const jobCard = createJobCard(job);
            container.appendChild(jobCard);
        });
        
        // Update count
        const countElement = document.querySelector(`[data-status="${status}"] .job-count`);
        countElement.textContent = jobs.length;
    });
}

function createJobCard(job) {
    const card = document.createElement('div');
    card.className = 'job-card';
    card.draggable = true;
    card.dataset.jobId = job.id;
    
    card.innerHTML = `
        <h4>${job.company}</h4>
        <p>${job.position}</p>
        <p style="font-size: 0.8rem; color: #64748B;">${job.location}</p>
        <div class="job-meta">
            <span class="priority-tag priority-${job.priority.toLowerCase()}">${job.priority}</span>
            <span class="job-salary">${job.salary}</span>
        </div>
    `;
    
    // Add drag and drop events
    card.addEventListener('dragstart', handleDragStart);
    card.addEventListener('dragend', handleDragEnd);
    
    return card;
}

function toggleExperience(expId) {
    const exp = currentData.experience.find(e => e.id === expId);
    exp.enabled = !exp.enabled;
    
    // Also toggle all bullets
    exp.bullets.forEach(bullet => bullet.enabled = exp.enabled);
    
    renderExperience();
    saveToLocalStorage();
}

function toggleBullet(expId, bulletId) {
    const exp = currentData.experience.find(e => e.id === expId);
    const bullet = exp.bullets.find(b => b.id === bulletId);
    bullet.enabled = !bullet.enabled;
    
    renderExperience();
    saveToLocalStorage();
}

function updateBulletText(expId, bulletId, newText) {
    const exp = currentData.experience.find(e => e.id === expId);
    const bullet = exp.bullets.find(b => b.id === bulletId);
    bullet.text = newText;
    
    saveToLocalStorage();
}

function switchTab(tabName) {
    // Update nav tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    
    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${tabName}-tab`).classList.add('active');
    
    // Initialize charts if needed
    if (tabName === 'analytics') {
        setTimeout(() => {
            initializeAnalyticsCharts();
        }, 100);
    }
}

function initializeTabs() {
    switchTab('resume');
}

function loadSampleJobDescription() {
    const sampleJob = `We are seeking a Senior Media Buyer to join our growing marketing team. The ideal candidate will have 5+ years of experience in performance marketing, with expertise in Facebook Ads, Google Ads, and other major advertising platforms. 

Key responsibilities include:
- Managing large advertising budgets ($500K+ monthly)
- Optimizing campaigns for ROAS and performance metrics
- Implementing tracking solutions and attribution models
- Collaborating with creative teams on ad development
- Analyzing campaign performance and providing insights

Requirements:
- Bachelor's degree in Marketing, Business, or related field
- 5+ years of experience in media buying and performance marketing
- Experience with programmatic advertising
- Strong analytical skills and data-driven mindset
- Experience with cross-platform campaign management
- Knowledge of attribution modeling and conversion tracking`;
    
    document.getElementById('job-description').value = sampleJob;
}

async function analyzeMatch() {
    const button = document.getElementById('analyze-btn');
    const resultsDiv = document.getElementById('analysis-results');
    
    // Показываем состояние загрузки
    button.innerHTML = '<span class="loading"></span> Analyzing...';
    button.disabled = true;
    
    try {
        // Собираем данные
        const resume = getEnabledResumeData();
        const jobDescription = document.getElementById('job-description').value;
        
        if (!jobDescription.trim()) {
            alert('Пожалуйста, вставьте описание вакансии');
            return;
        }
        
        console.log('=== ОТЛАДКА ФРОНТЕНДА ===');
        console.log('Длина резюме:', resume.length);
        console.log('Длина описания вакансии:', jobDescription.length);
        console.log('Отправляем запрос на:', 'http://localhost:3001/api/analyze');
        
        const response = await fetch('http://localhost:3001/api/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors', // Явно указываем CORS режим
            body: JSON.stringify({
                resume: resume,
                jobDescription: jobDescription
            })
        });
        
        console.log('Статус ответа:', response.status);
        console.log('Headers ответа:', [...response.headers.entries()]);
        
        if (!response.ok) {
            throw new Error(`Ошибка сервера: ${response.status} ${response.statusText}`);
        }
        
        const result = await response.json();
        console.log('Результат анализа:', result);
        
        // Отображаем результат
        displayAnalysisResults(result);
        resultsDiv.style.display = 'block';
        resultsDiv.classList.add('fade-in');
        
    } catch (error) {
        console.error('Ошибка при анализе:', error);
        
        // Показываем детальную информацию об ошибке
        if (error.name === 'TypeError' && error.message.includes('fetch')) {
            alert('Ошибка подключения к серверу. Убедитесь, что сервер запущен на порту 3001.');
        } else if (error.message.includes('CORS')) {
            alert('Ошибка CORS. Проверьте настройки сервера.');
        } else {
            alert(`Произошла ошибка: ${error.message}`);
        }
        
        // Фолбэк на локальный анализ
        console.log('Переключаемся на локальный анализ...');
        const localResult = performAnalysis();
        if (localResult) {
            displayAnalysisResults(localResult);
            resultsDiv.style.display = 'block';
        }
        
    } finally {
        // Возвращаем кнопку в нормальное состояние
        button.innerHTML = '<span>🔍</span> Analyze Match';
        button.disabled = false;
    }
}

    
   

function performAnalysis() {
    // This is a simplified analysis - in real implementation, you'd use AI/ML
    const jobDescription = document.getElementById('job-description').value.toLowerCase();
    
    // Calculate skill matches
    const skillMatches = currentData.skills.filter(skill => 
        jobDescription.includes(skill.toLowerCase())
    );
    
    // Calculate experience relevance
    const experienceKeywords = ['media buyer', 'performance marketing', 'facebook ads', 'google ads'];
    const experienceMatches = experienceKeywords.filter(keyword => 
        jobDescription.includes(keyword)
    );
    
    // Calculate scores
    const skillsScore = Math.min(100, (skillMatches.length / currentData.skills.length) * 100 + 20);
    const experienceScore = Math.min(100, (experienceMatches.length / experienceKeywords.length) * 100 + 15);
    const educationScore = jobDescription.includes('bachelor') ? 85 : 75;
    const industryScore = jobDescription.includes('advertising') || jobDescription.includes('marketing') ? 95 : 80;
    
    const overallScore = Math.round((skillsScore * 0.4 + experienceScore * 0.35 + educationScore * 0.15 + industryScore * 0.1));
    
    // Find missing keywords
    const allKeywords = ['programmatic advertising', 'attribution modeling', 'conversion tracking', 'A/B testing'];
    const missingKeywords = allKeywords.filter(keyword => 
        !jobDescription.includes(keyword.toLowerCase()) && 
        !currentData.skills.some(skill => skill.toLowerCase().includes(keyword.toLowerCase()))
    );
    
    return {
        overall: overallScore,
        categories: {
            skills: Math.round(skillsScore),
            experience: Math.round(experienceScore),
            education: Math.round(educationScore),
            industry: Math.round(industryScore)
        },
        missingKeywords: missingKeywords.slice(0, 3)
    };
}

function displayAnalysisResults(analysis) {
    // Update overall score
    document.getElementById('match-percentage').textContent = `${analysis.overall}%`;
    
    // Update category scores
    Object.keys(analysis.categories).forEach(category => {
        const score = analysis.categories[category];
        document.getElementById(`${category}-score`).textContent = `${score}%`;
        document.getElementById(`${category}-progress`).style.width = `${score}%`;
    });
    
    // Update missing keywords
    const missingKeywordsDiv = document.getElementById('missing-keywords-list');
    missingKeywordsDiv.innerHTML = '';
    
    analysis.missingKeywords.forEach(keyword => {
        const keywordSpan = document.createElement('span');
        keywordSpan.className = 'missing-keyword';
        keywordSpan.textContent = keyword;
        missingKeywordsDiv.appendChild(keywordSpan);
    });
    
    // Create circular progress chart
    createMatchChart(analysis.overall);
}

function createMatchChart(percentage) {
    const canvas = document.getElementById('match-chart');
    const ctx = canvas.getContext('2d');
    
    if (analysisChart) {
        analysisChart.destroy();
    }
    
    analysisChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [percentage, 100 - percentage],
                backgroundColor: ['#10B981', '#E5E7EB'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            cutout: '80%',
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

function exportToPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Set font
    doc.setFont('helvetica');
    
    let yPosition = 20;
    
    // Header
    doc.setFontSize(24);
    doc.setTextColor(40, 40, 40);
    doc.text(currentData.personalInfo.name, 20, yPosition);
    yPosition += 10;
    
    // Contact Info
    doc.setFontSize(12);
    doc.setTextColor(80, 80, 80);
    doc.text(`${currentData.personalInfo.location} | ${currentData.personalInfo.phone}`, 20, yPosition);
    yPosition += 5;
    doc.text(`${currentData.personalInfo.email} | ${currentData.personalInfo.linkedin}`, 20, yPosition);
    yPosition += 15;
    
    // Professional Summary
    doc.setFontSize(16);
    doc.setTextColor(40, 40, 40);
    doc.text('Professional Summary', 20, yPosition);
    yPosition += 8;
    
    doc.setFontSize(11);
    doc.setTextColor(60, 60, 60);
    const summaryLines = doc.splitTextToSize(currentData.summary, 170);
    summaryLines.forEach(line => {
        doc.text(line, 20, yPosition);
        yPosition += 5;
    });
    yPosition += 10;
    
    // Experience
    doc.setFontSize(16);
    doc.setTextColor(40, 40, 40);
    doc.text('Professional Experience', 20, yPosition);
    yPosition += 8;
    
    currentData.experience.forEach(exp => {
        if (!exp.enabled) return;
        
        // Position and Company
        doc.setFontSize(12);
        doc.setTextColor(40, 40, 40);
        doc.text(`${exp.position} - ${exp.company}`, 20, yPosition);
        yPosition += 5;
        
        // Period
        doc.setFontSize(10);
        doc.setTextColor(80, 80, 80);
        doc.text(exp.period, 20, yPosition);
        yPosition += 6;
        
        // Bullets
        exp.bullets.forEach(bullet => {
            if (!bullet.enabled) return;
            
            doc.setFontSize(10);
            doc.setTextColor(60, 60, 60);
            const bulletLines = doc.splitTextToSize(`• ${bullet.text}`, 165);
            bulletLines.forEach(line => {
                doc.text(line, 25, yPosition);
                yPosition += 4;
            });
            yPosition += 1;
        });
        
        yPosition += 5;
        
        // Check if we need a new page
        if (yPosition > 250) {
            doc.addPage();
            yPosition = 20;
        }
    });
    
    // Skills
    if (yPosition > 220) {
        doc.addPage();
        yPosition = 20;
    }
    
    doc.setFontSize(16);
    doc.setTextColor(40, 40, 40);
    doc.text('Technical Skills', 20, yPosition);
    yPosition += 8;
    
    doc.setFontSize(11);
    doc.setTextColor(60, 60, 60);
    const skillsText = currentData.skills.join(', ');
    const skillsLines = doc.splitTextToSize(skillsText, 170);
    skillsLines.forEach(line => {
        doc.text(line, 20, yPosition);
        yPosition += 5;
    });
    yPosition += 10;
    
    // Education
    doc.setFontSize(16);
    doc.setTextColor(40, 40, 40);
    doc.text('Education', 20, yPosition);
    yPosition += 8;
    
    if (currentData.education.length > 0) {
        doc.setFontSize(11);
        doc.setTextColor(60, 60, 60);
        doc.text(currentData.education[0].degree, 20, yPosition);
        yPosition += 5;
        doc.text(`${currentData.education[0].institution}, ${currentData.education[0].year}`, 20, yPosition);
    }
    
    // Save the PDF
    doc.save(`${currentData.personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`);
}

// Job Tracker Functions
function openJobModal() {
    document.getElementById('job-modal').style.display = 'block';
}

function closeJobModal() {
    document.getElementById('job-modal').style.display = 'none';
    clearJobForm();
}

function clearJobForm() {
    document.getElementById('job-company').value = '';
    document.getElementById('job-position').value = '';
    document.getElementById('job-salary').value = '';
    document.getElementById('job-location').value = '';
    document.getElementById('job-priority').value = 'Medium';
    document.getElementById('job-status').value = 'saved';
}

function saveJob() {
    const newJob = {
        id: Date.now(),
        company: document.getElementById('job-company').value,
        position: document.getElementById('job-position').value,
        salary: document.getElementById('job-salary').value,
        location: document.getElementById('job-location').value,
        priority: document.getElementById('job-priority').value,
        status: document.getElementById('job-status').value,
        dateAdded: new Date().toISOString().split('T')[0]
    };
    
    if (newJob.company && newJob.position) {
        jobsData.push(newJob);
        renderJobTracker();
        closeJobModal();
        saveToLocalStorage();
    }
}

// Drag and Drop Functions
function handleDragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.jobId);
    e.target.classList.add('dragging');
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

// Add drop zones
document.addEventListener('DOMContentLoaded', function() {
    const dropZones = document.querySelectorAll('.job-cards');
    
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', function(e) {
            e.preventDefault();
            this.classList.add('drag-over');
        });
        
        zone.addEventListener('dragleave', function(e) {
            this.classList.remove('drag-over');
        });
        
        zone.addEventListener('drop', function(e) {
            e.preventDefault();
            this.classList.remove('drag-over');
            
            const jobId = parseInt(e.dataTransfer.getData('text/plain'));
            const newStatus = this.parentElement.dataset.status;
            
            // Update job status
            const job = jobsData.find(j => j.id === jobId);
            if (job) {
                job.status = newStatus;
                renderJobTracker();
                saveToLocalStorage();
            }
        });
    });
});

// Analytics Functions
function initializeAnalyticsCharts() {
    createApplicationChart();
    createTrendsChart();
}

function createApplicationChart() {
    const ctx = document.getElementById('application-chart');
    if (!ctx) return;
    
    if (applicationChart) {
        applicationChart.destroy();
    }
    
    const statusCounts = {
        'Saved': jobsData.filter(j => j.status === 'saved').length,
        'Applying': jobsData.filter(j => j.status === 'applying').length,
        'Applied': jobsData.filter(j => j.status === 'applied').length,
        'Interview': jobsData.filter(j => j.status === 'interview').length,
        'Negotiating': jobsData.filter(j => j.status === 'negotiating').length,
        'Accepted': jobsData.filter(j => j.status === 'accepted').length
    };
    
    applicationChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(statusCounts),
            datasets: [{
                label: 'Number of Applications',
                data: Object.values(statusCounts),
                backgroundColor: ['#EF4444', '#F59E0B', '#3B82F6', '#10B981', '#8B5CF6', '#06B6D4']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function createTrendsChart() {
    const ctx = document.getElementById('trends-chart');
    if (!ctx) return;
    
    if (trendsChart) {
        trendsChart.destroy();
    }
    
    // Sample data for trends
    const trendsData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            label: 'Applications Sent',
            data: [2, 4, 3, 5],
            borderColor: '#3B82F6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            fill: true
        }, {
            label: 'Interviews Scheduled',
            data: [0, 1, 2, 3],
            borderColor: '#10B981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            fill: true
        }]
    };
    
    trendsChart = new Chart(ctx, {
        type: 'line',
        data: trendsData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Local Storage Functions
function saveToLocalStorage() {
    localStorage.setItem('resumeData', JSON.stringify(currentData));
    localStorage.setItem('jobsData', JSON.stringify(jobsData));
}

function loadFromLocalStorage() {
    const savedResumeData = localStorage.getItem('resumeData');
    const savedJobsData = localStorage.getItem('jobsData');
    
    if (savedResumeData) {
        currentData = JSON.parse(savedResumeData);
        populateResumeEditor();
        renderExperience();
        renderSkills();
    }
    
    if (savedJobsData) {
        jobsData = JSON.parse(savedJobsData);
        renderJobTracker();
    }
}

// Window click handler for modal
window.onclick = function(event) {
    const modal = document.getElementById('job-modal');
    if (event.target === modal) {
        closeJobModal();
    }
}
