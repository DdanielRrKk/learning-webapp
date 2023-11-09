<?php
    class Course {
        private $Id;
        private $courseId;
        private $Title;
        private $Image;

        public function __construct($Id, $courseId, $Title, $Image) {
            $this->Id = $Id;
            $this->courseId = $courseId;
            $this->Title = $Title;
            $this->Image = $Image;
        }

        public function getId() { return $this->Id; }
        public function getCourseId() { return $this->courseId; }
        public function getTitle() { return $this->Title; }
        public function getImage() { return $this->Image; }
        
        public function setId($Id) { $this->Id = $Id; }
        public function setCourseId($courseId) { $this->courseId = $courseId; }
        public function setTitle($Title) { $this->Title = $Title; }
        public function setImage($Image) { $this->Image = $Image; }
        
        public function __toJSON() { return $this->Id.'|'.$this->courseId.'|'.$this->Title.'|'.$this->Image; }
    }
?>